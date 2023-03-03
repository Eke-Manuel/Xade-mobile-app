import * as particleConnect from 'react-native-particle-connect';
import {PNAccount} from './Models/PNAccount';
// import * as Helper from './Helper';
import {
  Env,
  LoginType,
  SupportAuthType,
  WalletType,
} from 'react-native-particle-connect';
import {ChainInfo} from 'react-native-particle-connect';
import {ParticleConnectConfig} from 'react-native-particle-connect';

connect = async ({walleType}) => {
  console.log('Connect:', walleType);
  const result = await particleConnect.connect(walleType);
  if (result.status) {
    console.log('connect success');
    const account = result.data;
    const name = account.name ? account.name : 'Not Set';
    global.connectAccount = new PNAccount(
      'Not Set',
      name,
      account.publicAddress,
    );
    global.setAuth = false;
    console.log('pnaccount = ', global.connectAccount);
  } else {
    console.log('connect failure');
    const error = result.data;
    console.log(error);
  }

  return connectAccount;
};

onClickConnect = async ({navigation, walletype}) => {
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
  console.log('onClick:', walletype);
  var account = await this.connect({walleType: walletype});
  var result = await particleConnect.isConnected(
    walletype,
    account.publicAddress,
  );

  console.log('Account Info:', account);

  console.log('Result:', result);
  if (result) {
    navigation.navigate('Payments');
  } else {
    navigation.navigate('Error');
  }

  //  uInfo = await particleConnect.getInfo();
  //  console.log('Public Address:', uInfo);
};

disconnect = async () => {
  const publicAddress = connectAccount.publicAddress;
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
