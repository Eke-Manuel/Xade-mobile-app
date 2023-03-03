import {
  ChainInfo,
  LoginType,
  SupportAuthType,
  Env,
} from 'react-native-particle-auth';
import * as particleAuth from 'react-native-particle-auth';
import {PNAccount} from './Models/PNAccount';

init = async () => {
  const chainInfo = ChainInfo.PolygonMumbai;
  const env = Env.Production;
  particleAuth.init(chainInfo, env);
};

setChainInfo = async () => {
  const chainInfo = ChainInfo.PolygonMumbai;
  const result = await particleAuth.setChainInfo(chainInfo);
  console.log(result);
};

login = async () => {
  const type = LoginType.Email;
  const supportAuthType = [SupportAuthType.Phone];
  const result = await particleAuth.login(type, '', supportAuthType, undefined);
  const account = result.data;
  if (result.status) {
    const email = account.email ? account.email : account.phone;
    const name = account.name ? account.name : 'Not Set';
    const address = account.wallets[0].publicAddress;
    global.loginAccount = new PNAccount(email, name, address);
    global.withAuth = true;
    const userInfo = result.data;
    console.log('User Info:', userInfo);
  } else {
    const error = result.data;
    console.log('Error:', error);
  }
};

logout = async navigation => {
  const result = await particleAuth.logout();
  console.log('Logged out successfully');
};

getUserInfo = async () => {
  var userInfo = await particleAuth.getUserInfo();
  userInfo = JSON.parse(userInfo);
  console.log(userInfo);
};

openWebWallet = async () => {
  particleAuth.openWebWallet();
};

onClickLogin = async navigation => {
  await this.init();

  navigation.navigate('Loading');

  await this.setChainInfo();
  await this.login();
  const result = await particleAuth.isLogin();

  console.log('Logged In:', result);
  if (result) {
    navigation.navigate('Payments');
  } else {
    navigation.navigate('Error');
  }

  console.log('Public Address:', global.loginAccount);
};

export default {
  init,
  onClickLogin,
  openWebWallet,
  getUserInfo,
  logout,
};
/*
const sender = await particleAuth.getAddress();
const chainInfo = await particleAuth.getChainInfo();
let transaction = '';
transaction = await Helper.getEthereumTransacion(sender);

console.log(transaction);
const result = await particleAuth.signAndSendTransaction(transaction);
if (result.status) {
  const signature = result.data;
  console.log(signature);
} else {
  const error = result.data;
  console.log(error);
}
*/
