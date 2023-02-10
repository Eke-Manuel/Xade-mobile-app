import React, {PureComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import ConnectDemo from './ConnectDemo';
import StaticHomeScreen from './screens/home';

const Stack = createNativeStackNavigator();
const bg = require('../assets/bg.png');

function ParticleAuth({navigation}) {
  return (
    <View>
      <ConnectDemo />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={StaticHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ParticleAuth" component={ParticleAuth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
