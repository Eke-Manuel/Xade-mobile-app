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

import countries from '../../../countries';


export default function Component()
{   
    // Some routing must be done after Pending state
    return <View style = {{width:'100%', height: '100%', justifyContent: 'center'}}>
        <View style = {{width: '80%', marginTop: '30%'}}>

        </View>

        <Text style = {{fontFamily: 'EulidCircular-Regular.ttf', marginTop: '10%'}}>Transaction unsuccessful</Text>

    </View>
}