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
import {Text} from '@rneui/themed';
// import Video from 'react-native-video';
//const video = require('./unsuccessful.mp4');

export default function Component({navigation}) {
  // Some routing must be done after Pending state
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#151515'}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 25,
          marginTop: '20%',
          textAlign: 'center',
          fontFamily: 'NeueMachina-UltraBold',
        }}>
        Transaction Unsuccessful!
      </Text>
      <View style={{width: '80%', marginTop: '30%', marginLeft: '11%'}}>
        {/* <Video
          //   source={video}
          style={{width: 300, height: 300}}
        /> */}
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
