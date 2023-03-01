import * as particleConnect from 'react-native-particle-connect';
import {Env, WalletType} from 'react-native-particle-connect';
import {ChainInfo} from 'react-native-particle-connect';
import {PNAccount} from './models/PNAccount';

const walletType = WalletType.MetaMask;

var pnaccount;

connect = async () => {
  const result = await particleConnect.connect(walletType);
  if (result.status) {
    console.log('connect success');
    const account = result.data;
    pnaccount = new PNAccount(
      account.icons,
      account.name,
      account.publicAddress,
      account.url,
    );
    console.log('pnaccount = ', pnaccount);
  } else {
    console.log('connect failure');
    const error = result.data;
    console.log(error);
  }

  return pnaccount;
};

onClickConnect = async navigation => {
  const metadata = {
    name: 'Xade Finance',
    icon: 'https://connect.particle.network/icons/512.png',
    url: 'https://connect.particle.network',
  };
  const rpcUrl = {evm_url: null, solana_url: null};
  particleConnect.init(
    ChainInfo.PolygonMainnet,
    Env.Production,
    metadata,
    rpcUrl,
  );

  navigation.navigate('Loading');

  var account = await this.connect();

  var result = await particleConnect.isConnected(
    WalletType.MetaMask,
    account.publicAddress,
  );

  console.log('Account Info:', account);
  const address = account.publicAddress;
  fetch('', {
    method: 'POST',
    body: `address:${address.toLowerCase()}||${101}`,
  });
  console.log('Result:', result);
  if (result) {
    navigation.navigate('Payments');
  } else {
    navigation.navigate('Error');
  }
};

disconnect = async () => {
  const publicAddress = pnaccount.publicAddress;
  const result = await particleConnect.disconnect(walletType, publicAddress);
  if (result.status) {
    console.log(result.data);
    console.log('Disconnected successfully');
  } else {
    const error = result.data;
    console.log(error);
  }
};
export default {onClickConnect, disconnect};
