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
import {useState, useMemo, useEffect} from 'react';
import {Text} from '@rneui/themed';
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';
import {SelectCountry} from 'react-native-element-dropdown';
import {Dropdown} from 'react-native-element-dropdown';
import ethProvider from './../ethProvider'
import countries from '../../../countries';
import { ParticleProvider } from '@particle-network/provider';


export default function Component({ route, navigation })
{       
//     const { amount, toAddress, mobileNumber, emailAddress } = route.params;

//     // signAndSendTransaction here calling ethProvider
//     const provider = new ParticleProvider(particle.auth)
//     const {signAndSendTransaction} = ethProvider(provider)
//     useEffect(async () => { 
//         const txReciept = await signAndSendTransaction(amount, toAddress);
//         if(true) // this should check the status of txReceipt
//         {
//             navigation.navigate('Successful', {...route.params, txReceipt})
//         }
//         else
//         {
//             navigation.navigate('Unsuccessful');
//         }
//      }, [])

    return <View style = {{width:'100%', height: '100%'}}>
        <View style = {{width: '80%', marginTop: '30%'}}>
            {/* Video here */}
        </View>
    </View>
}