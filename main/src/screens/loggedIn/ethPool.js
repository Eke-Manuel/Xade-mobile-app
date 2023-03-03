import Web3 from 'web3';

var done = false;
var address = '';

const ethProvider = provider => {
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
      const contractAddress = '0x844B1c89F857fFb31af3643b515A948995ee35C2'; // USDC Address
      const contract = new web3.eth.Contract(Token.abi, contractAddress);
      let accounts = await web3.eth.getAccounts();
      const balance = await contract.methods.balanceOf(accounts[0]).call();
      return balance;
    } catch (error) {
      console.error('Error', error);
    }
  };

  const approveERC20 = async (address, amount) => {
    try {
      const web3 = new Web3(provider);

      let accounts = await web3.eth.getAccounts();

      const usdcAddr = '0x844B1c89F857fFb31af3643b515A948995ee35C2';
      const usdcContract = new web3.eth.Contract(Token.abi, usdcAddr);

      const txRes = await usdcContract.methods
        .approve(address, web3.utils.toBN(Web3.utils.toWei(amount, 'ether')))
        .send({
          from: accounts[0],
          gas: 80000,
          maxPriorityFeePerGas: '5000000000',
          maxFeePerGas: '6000000000000',
        });
      console.log(txRes);
      return txRes;
    } catch (error) {
      console.log('Could not process transaction!');
      console.log('error', error);
      return false;
    }
  };

  const signAndSendTransaction = async (toAddress, amount) => {
    try {
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const contractAddress = '0x844B1c89F857fFb31af3643b515A948995ee35C2'; //USDC Address
      const contract = new web3.eth.Contract(Token.abi, contractAddress);

      const transferToken = await contract.methods
        .transfer(toAddress, web3.utils.toBN(Web3.utils.toWei(amount, 'ether')))
        .send({
          to: contractAddress,
          from: accounts[0],
          gas: 80000,
          maxPriorityFeePerGas: '5000000000',
          maxFeePerGas: '6000000000000',
        });

      const txRes = await transferToken.waitReceipt();

      console.log('Receipt', txRes);
      return txRes;
    } catch (error) {
      console.log('Could not process transaction!');
      console.log('error', error);
      return false;
    }
  };

  return {
    getBalance,
    signAndSendTransaction,
    readAddress,
  };
};

export default ethProvider;
