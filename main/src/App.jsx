import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from 'react-native-elements';

import {
  View,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import ParticleConnect from './ParticleConnect';
import ParticleAuth from './ParticleAuth';
import {openWebWallet, logoutAccount} from './ParticleAuth';
import {disconnect} from './ParticleConnect';

import StaticHomeScreen from './screens/home';
import Login from './screens/login';
import Countdown from './screens/countdown';
import {Text} from 'react-native-elements';

const Stack = createNativeStackNavigator();
const bg = require('../assets/bg.png');
const windowHeight = Dimensions.get('window').height;

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
    <ScrollView>
      <View style={styles.black}>
        <SafeAreaView>
          <View>
            <Text style={styles.text}>Thank You For Registering...</Text>
            <Countdown navigation={navigation} />
            <TouchableOpacity
              style={styles.logout}
              onPress={() => {
                this.disconnect();
                navigation.navigate('Particle');
              }}>
              <Text style={styles.logoutext}>Disconnect</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

function Connected({navigation}) {
  return (
    <ScrollView>
      <View style={styles.black}>
        <SafeAreaView>
          <View>
            <Text style={styles.text}>Thank You For Registering...</Text>
            <Countdown navigation={navigation} />
            <TouchableOpacity
              style={styles.logout}
              onPress={() => {
                this.disconnect();
                navigation.navigate('Particle');
              }}>
              <Text style={styles.logoutext}>Disconnect</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

function Error({navigation}) {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <SafeAreaView>
        <View>
          <Text style={styles.text}>Error...</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Particle')}
          />
          <Text style={styles.buttonText}>Try Again</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

function Loading({navigation}) {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <SafeAreaView>
        <View>
          <ActivityIndicator
            style={styles.loader}
            color="#E8FF59"
            size="large"
          />
          <Text style={styles.text}>Loading...</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
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
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ParticleAuth" component={Auth} />
        <Stack.Screen name="ParticleConnect" component={Connect} />
        <Stack.Screen
          name="LoggedIn"
          component={LoggedIn}
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Connected"
          component={Connected}
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Error"
          component={Error}
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
          navigation={navigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  loader: {
    marginTop: '80%',
  },

  text: {
    color: '#E8FF59',
    fontFamily: 'NeueMachina-UltraBold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: '5%',
  },

  button: {
    width: '50%',
    color: '#000',
    borderRadius: 10,
    marginLeft: '25%',
    marginTop: '20%',
    padding: '7%',
    backgroundColor: '#E8FF59',
    marginBottom: '5%',
  },

  buttonText: {
    color: '#000',
    fontFamily: 'VelaSans-Bold',
    fontSize: 20,
    marginTop: '-15.5%',
    marginLeft: '38%',
  },

  walletButton: {
    width: '50%',
    color: '#000',
    borderRadius: 10,
    marginLeft: '26%',
    marginTop: '90%',
    padding: '5%',
    backgroundColor: '#E8FF59',
    marginBottom: '5%',
  },

  walletButtonText: {
    color: '#000',
    fontFamily: 'VelaSans-Bold',
    fontSize: 17,
    marginTop: '-1%',
    marginLeft: '15%',
  },

  logoutext: {
    color: '#fff',
    fontFamily: 'VelaSans-Bold',
    fontSize: 20,
    textAlign: 'center',
  },

  logout: {
    width: '100%',
    color: '#fff',
    fontFamily: 'VelaSans-Bold',
    fontSize: 20,
    marginTop: '67%',
  },

  black: {
    height: windowHeight,
    backgroundColor: '#000',
  },
});

/*
    defaultConfig {
        applicationId "com.org.xadefinance"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"

        manifestPlaceholders["PN_PROJECT_ID"] = "260df770-44b4-4afd-a408-0a9f2b9944a9"
        manifestPlaceholders["PN_PROJECT_CLIENT_KEY"] = "c2HUrCSv7ymat5zCKhD41B9BA8bsRIFJgAXM0Jlm"
        manifestPlaceholders["PN_APP_ID"] = "f84832a5-f295-4f30-a1b7-18aa0a616d16"
    }
    */
