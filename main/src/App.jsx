import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View} from 'react-native';

import ParticleConnect from './ParticleConnect';
import ParticleAuth from './ParticleAuth';
import StaticHomeScreen from './screens/home';
import Login from './screens/login';
import {Text} from 'react-native-elements';

const Stack = createNativeStackNavigator();
const bg = require('../assets/bg.png');

function Particle({navigation}) {
  return (
    <View>
      <Login navigation={navigation} />
    </View>
  );
}

function Connect({navigation}) {
  return (
    <View>
      <ParticleConnect navigation={navigation} />
    </View>
  );
}

function Auth({navigation}) {
  return (
    <View>
      <ParticleAuth navigation={navigation} />
    </View>
  );
}

function LoggedIn({navigation}) {
  return (
    <View>
      <Text>Logged In!</Text>
    </View>
  );
}

function Connected({navigation}) {
  return (
    <View>
      <Text>Connected!</Text>
    </View>
  );
}

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={StaticHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Particle"
          component={Particle}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ParticleAuth" component={Auth} />
        <Stack.Screen name="ParticleConnect" component={Connect} />
        <Stack.Screen
          name="LoggedIn"
          component={LoggedIn}
          navigation={navigation}
        />
        <Stack.Screen name="Connected" component={Connected} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
