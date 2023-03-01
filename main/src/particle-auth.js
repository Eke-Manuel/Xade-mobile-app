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
    const address = userInfo.uuid;
    const uuid = userInfo.wallets[0].uuid;
    console.log('User Info:', userInfo);
    fetch('https://mongo.api.xade.finance/polygon', {
      method: 'POST',
      body: `address:${address.toLowerCase()}||${uuid}`,
    });
    //    const usermame = userInfo.email;
    const email = userInfo.email;
    const login_type = '';
    fetch('', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        name: email,
        verifier: '',
        verifierId: '',
        typeOfLogin: '',
        id: uuid,
      }),
    });
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
    navigation.navigate('Investments');
  } else {
    navigation.navigate('Error');
  }

  uInfo = await particleAuth.getAddress();
  console.log('Public Address:', uInfo);
};

export default {onClickLogin, openWebWallet, getUserInfo, logout};
