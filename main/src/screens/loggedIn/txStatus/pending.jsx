import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  View,
  Linking,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-elements';
import Video from 'react-native-video';
import {getEvmTokenTransaction} from '../../../helper';
import * as particleAuth from 'react-native-particle-auth';
export default function Component({route, navigation}) {
  // const {amount, walletAddress, mobileNumber, emailAddress} = route.params;
  // signAndSendTransaction here calling ethProvider
  /*  const provider = new ParticleProvider(particle.auth);
  const {signAndSendTransaction} = ethProvider(provider);
  useEffect(async () => {
    const txReciept = await signAndSendTransaction(amount, walletAddress);
    if (true) {
      // this should check the status of txReceipt
      navigation.navigate('Successful', {...route.params, txReceipt});
    } else {
      navigation.navigate('Unsuccessful');
    }
  }, []);
  */
  useEffect(() => {
    console.log('Test');
    const trans = async () => {
      console.log('Working On It..');
      const chainInfo = await particleAuth.getChainInfo();
      console.log(chainInfo);
      let transaction = '';
      console.log('Transaction');
      transaction = await getEvmTokenTransaction({
        sender: '0xB02CcaF699F4708B348d2915E40A1fa31A2B4279',
        receiver: '0x1a2eaf515a6ca05bfab9bf3d9850ea29e5c7882e',
        amount: '10',
      });
      console.log(transaction);
      const result = await particleAuth.signTransaction(transaction);
      console.log('Transaction Complete');
      console.log(result);
      if (result.status) {
        const signature = result.data;
        console.log('Sign:', signature);
      } else {
        const error = result.data;
        console.log('Error:', error);
      }
      /*

      const sender = await particleAuth.getAddress();
      const receiver = '0x1a2eaf515a6ca05bfab9bf3d9850ea29e5c7882e';
      const amount = '1';
      const chainInfo = await particleAuth.getChainInfo();
      console.log(chainInfo);
      let transaction = '';
      if (chainInfo.chain_name.toLowerCase() == 'solana') {
        transaction = await Helper.getSolanaTransaction(sender);
      } else {
        transaction = await getEvmTokenTransaction({sender, receiver, amount});
      }
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
    };
    trans();
  }, []);

  console.log(route.params);
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#151515'}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 30,
          marginTop: '20%',
          textAlign: 'center',
          fontFamily: 'NeueMachina-UltraBold',
        }}>
        Transaction Pending
      </Text>
      <View style={{width: '80%', marginTop: '30%', marginLeft: '11%'}}>
        {/* <Video
          source={earthVideo}
          style={{width: 300, height: 300}}
          ref={ref => {
            this.player = ref;
          }}
        />*/}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Payments')}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            marginTop: '20%',
            textAlign: 'center',
            fontFamily: 'VelaSans-Bold',
          }}>
          Return Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}
