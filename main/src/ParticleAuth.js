import {
  ChainInfo,
  LoginType,
  SupportAuthType,
  Env,
} from 'react-native-particle-auth';
import * as particleAuth from 'react-native-particle-auth';

init = async () => {
  const chainInfo = ChainInfo.PolygonMainnet;
  const env = Env.Production;
  particleAuth.init(chainInfo, env);
};

setChainInfo = async () => {
  const chainInfo = ChainInfo.PolygonMainnet;
  const result = await particleAuth.setChainInfo(chainInfo);
  console.log(result);
};

login = async () => {
  const type = LoginType.Email;
  const supportAuthType = [
    SupportAuthType.Phone,
    SupportAuthType.Google,
    SupportAuthType.Apple,
    SupportAuthType.Linkedin,
    SupportAuthType.Github,
  ];
  const result = await particleAuth.login(type, '', supportAuthType, undefined);
  if (result.status) {
    const userInfo = result.data;
    console.log(userInfo);
  } else {
    const error = result.data;
    console.log(error);
  }
};

logout = async navigation => {
  const result = await particleAuth.logout();
  console.log('Logged out successfully');
};

getUserInfo = async () => {
  const result = await particleAuth.getUserInfo();
  const userInfo = JSON.parse(result);
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

  console.log('Result:', result);
  if (result) {
    navigation.navigate('LoggedIn');
  } else {
    navigation.navigate('Error');
  }
};

export default {onClickLogin, openWebWallet, logout};
