import React from 'react';
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
import {ParticleProvider} from '@particle-network/provider';
import {ParticleNetwork, WalletEntryPosition} from '@particle-network/auth';
import ethProvider from '../ethPool';

export default function Component({route, navigation}) {
  const {amount, walletAddress, mobileNumber, emailAddress} = route.params;
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
        <Video
          source={earthVideo}
          style={{width: 300, height: 300}}
          ref={ref => {
            this.player = ref;
          }}
        />
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
