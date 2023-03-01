import Token from "./USDC.json";
import pendingPool from "./PendingPool.json";
import Web3 from "web3";
import '../../../global'
var done = false;
var address = "";

const ethProvider = (provider ) => {

    const readAddress = async () => {
        try {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
        } catch (error) {
        return error;
        }
    };

    const getBalance = async () => {
        try {
        const web3 = new Web3(provider);
        const contractAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; // USDC Address
        const contract = new web3.eth.Contract(Token.abi, contractAddress);
        let accounts = await web3.eth.getAccounts();
        const balance = await contract.methods.balanceOf(accounts[0]).call();
        return balance;
        } catch (error) {
        console.error("Error", error);
        }
    };

    const approveERC20 = async (address, amount) => {
        try {
        const web3 = new Web3(provider);

        let accounts = await web3.eth.getAccounts();

        const usdcAddr = "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747";
        const usdcContract = new web3.eth.Contract(Token.abi, usdcAddr);

        const txRes = await usdcContract.methods
            .approve(
            address,
            web3.utils.toBN(Web3.utils.toWei(amount, "ether"))
            )
            .send({
            from: accounts[0],
            gas: 80000,
            maxPriorityFeePerGas: "5000000000",
            maxFeePerGas: "6000000000000",
            });
        console.log(txRes);
        return txRes;
        } catch (error) {
        console.log("Could not process transaction!");
        console.log("error", error);
        return false;
        }
    };

    const signAndSendTransaction = async (toAddress, amount) => {
        try {
            const web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts();
            const contractAddress = "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747"; //USDC Address
            const contract = new web3.eth.Contract(Token.abi, contractAddress);

            const transferToken = await contract.methods.transfer(toAddress, web3.utils.toBN(Web3.utils.toWei(amount, "ether")))
            .send({
                to: contractAddress,
                from: accounts[0],
                gas: 80000,
                maxPriorityFeePerGas: "5000000000", 
                maxFeePerGas: "6000000000000"
            })

            const txRes = await transferToken.waitReceipt();

            console.log("Receipt", txRes);
            return txRes;
        } catch (error) {
        console.log("Could not process transaction!");
        console.log("error", error);
        return false;
        }
    };

    const depositToPendingPool = async (amount) => {
        try {
        const web3 = new Web3(provider);
        const pendingPoolAddress = "0xfBEa2B0397111770803113e3257DdE4570cb0193";
        const PendingPool = new web3.eth.Contract(pendingPool.abi, pendingPoolAddress);
        
        let accounts = await web3.eth.getAccounts();
        const usdcAddress = "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747"

        const approved = await approveERC20(pendingPoolAddress, amount);
        if (approved) {
            const transferToken = await PendingPool.methods.deposit(usdcAddress, web3.utils.toBN(Web3.utils.toWei(amount, "ether")))
            .send({
            from: accounts[0],
            gas: 80000,
            maxPriorityFeePerGas: "5000000000",
            maxFeePerGas: "6000000000000"
            });
            const txRes = await transferToken.waitReceipt();
            if (txRes.status == "0x1" || txRes.status == 1) {
            console.log(`${txRes.status} Transaction Success`);
            return txRes;
            } else {
            console.log(`${txRes.status} Transaction Failed`);
            return txRes;
            }
        }
        } catch (error) {
        console.log("Could not process transaction!");
        console.log("error", error);
        }
    };

    return { getBalance, signAndSendTransaction, readAddress, depositToPendingPool};
};

export default ethProvider;
