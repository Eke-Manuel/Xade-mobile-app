import {TestAccountEVM} from './TestAccount';
import BigNumber from 'bignumber.js';
import {Buffer} from 'buffer';
import {EvmService} from './NetService/EvmService';

export async function getEvmTokenTransaction({sender, receiver, amount}) {
  // mock a ethereum token transaction
  // send 0.01 chain link token on ethereum goerli

  const contractAddress = '0x844B1c89F857fFb31af3643b515A948995ee35C2';

  const data = await EvmService.erc20Transfer(
    contractAddress,
    receiver,
    amount,
  );
  console.log(`data = ${data}`);
  const gasLimit = await EvmService.estimateGas(sender, receiver, '0x0', data);
  console.log(`gasLimit = ${gasLimit}`);
  const gasFeesResult = await EvmService.suggeseGasFee();
  console.log(`gasFeesResult = ${gasFeesResult}`);

  const maxFeePerGas = gasFeesResult.high.maxFeePerGas;
  const maxFeePerGasHex =
    '0x' + BigNumber(maxFeePerGas * Math.pow(10, 9)).toString(16);

  const maxPriorityFeePerGas = gasFeesResult.high.maxPriorityFeePerGas;
  const maxPriorityFeePerGasHex =
    '0x' + BigNumber(maxPriorityFeePerGas * Math.pow(10, 9)).toString(16);
  const chainId = TestAccountEVM.chainId;

  const transaction = {
    from: sender,
    to: contractAddress,
    data: data,
    gasLimit: gasLimit,
    value: '0x0',
    type: '0x2',
    chainId: '0x' + chainId.toString(16),
    maxPriorityFeePerGas: maxPriorityFeePerGasHex,
    maxFeePerGas: maxFeePerGasHex,
  };

  console.log(transaction);
  const json = JSON.stringify(transaction);
  const serialized = Buffer.from(json).toString('hex');
  return '0x' + serialized;
}
