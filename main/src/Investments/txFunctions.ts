import contracts from './constants'
import { ethers, FixedNumber, BigNumber } from "ethers";
import { ParticleProvider } from "@particle-network/provider"
import particle  from "../ParticleConfig"
import ClearingHouseABI from "../ABIs/ClearingHouse.json"
import { displayPositions, getPositionDetails } from "./viewFunctions";

const particleProvider = new ParticleProvider(particle.auth);

const provider = new ethers.providers.Web3Provider(particleProvider);
const signer = provider.getSigner();
const userAccount = signer.getAddress();

const clearingHouseAddress = "clearingHouseAddress";

const clearingHouse: any = new ethers.Contract(clearingHouseAddress, ClearingHouseABI.abi, signer);

export async function openPosition(Amm: string, side: string, quoteAssetAmounti: string, leveragei: string, baseAssetAmountLimiti: string) {

    const amm = contracts[0].address;

    const quoteAssetAmount = FixedNumber.from(quoteAssetAmounti);
    const leverage = FixedNumber.from(leveragei);
    const baseAssetAmountLimit =  FixedNumber.from(baseAssetAmountLimiti);
    
    const txData = clearingHouse.openPosition(amm, side, quoteAssetAmount, leverage, baseAssetAmountLimit).send({
        to: clearingHouseAddress, 
        from: userAccount,
        gas: 80000,
        maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
        maxFeePerGas: "6000000000000",
    });
    txData.wait();
    // Retrieve position details for display
    displayPositions(Amm)
}

/*
* amm => String(asset symbol in caps)
* slippage => Number (max variance from expected amount, Default: 0.5%)
*/
export async function closePosition(amm: string, slippage: number = 0.5) {
    getPositionDetails(amm)
    .then(async (position) => {
        const Amm = contracts[0].address;
        const margin = FixedNumber.from(position.margin);
        const _slippage = margin.mulUnsafe(FixedNumber.from(slippage).divUnsafe(100)); 
        const quoteAssetAmountLimit = margin.subUnsafe(_slippage);

        const txData =clearingHouse.closePosition(Amm, quoteAssetAmountLimit)
        .send({
            to: clearingHouseAddress, 
            from: userAccount,
            gas: 80000,
            maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
            maxFeePerGas: "6000000000000",
        });
        txData.wait();

        displayPositions(Amm)
    })
}

/*
//Add or remove margin from an open position 
// NB: would not affect position size. Instead, leverage is adjusted accordingly
PARAMETERS:
* amm => String(asset symbol IN CAPS)
* amount => Number(amount of margin to remove)
* dir => Number(0 or 1. Implement as a switch, 0 for remove, 1 for add)
*/
export async function adjustMargin(amm: string, amount: string, dir: number) {
    getPositionDetails(amm)
    .then(async (position) => {
        const margin =FixedNumber.from(position.margin).addUnsafe(amount);
        const leverage = FixedNumber.from(position.size).divUnsafe(margin);
        const _amount = FixedNumber.from(amount);
        const Amm = contracts[0].address;
        let txData;

        if (dir) {
            txData = clearingHouse.addMargin(Amm, _amount).send({
                to: clearingHouseAddress, 
                from: userAccount,
                data: txData,
                gas: 80000,
                maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
                maxFeePerGas: "6000000000000",
            });
            txData.wait();
            console.log(txData.transactionHash);
        } else {
            txData = clearingHouse.removeMargin(Amm, _amount).send({
                to: clearingHouseAddress, 
                from: userAccount,
                data: txData,
                gas: 80000,
                maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
                maxFeePerGas: "6000000000000",
            });
            txData.wait();
            console.log(txData.transactionHash);
        }
        // Retrieve position details for display
        displayPositions(Amm)
    })
}

//Get users position history
export async function getPositionHistory() {
    await clearingHouse.queryFilter(positionClosed, 0, "latest")
    .then((events: any) => {
        for (let i = 0; i < events.length; i++){
        getPosition(events[i]);
        }
    })
}

function getPosition(object: any) {
    const amm = contracts[0].symbol;
    const margin = object.args.margin;
    const PositionNotional = object.args.positionNotional;
    const PositionSize = object.args.exchangedPositionSize;
    const Fee = object.args.fee;
    const PositionSizeAfterTransaction = object.args.positionSizeAfter;
    const RealizedPnL = object.args.realizedPnl;
    const LiquidationPenalty = object.args.liquidationPenalty;
    const SpotPrice = object.args.spotPrice;
    const FundingPayment = object.args.fundingPayment;

    return { amm, margin, PositionNotional, PositionSize, Fee, PositionSizeAfterTransaction, RealizedPnL, LiquidationPenalty, SpotPrice, FundingPayment }
}

const positionClosed = clearingHouse.filters.PositionChanged(userAccount,null, null, null, null, null, BigNumber.From(0));
