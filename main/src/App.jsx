import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

import StaticHomeScreen from './screens/home';
import SendEmailComponent from './screens/sendMoney/sendEmail';
import SendMobileComponent from './screens/sendMoney/sendMobile';
import EnterAmountComponent from './screens/enterAmount';
import Pending from './screens/transactionStatus/pending';
import Successful from './screens/transactionStatus/successful';
import Unsuccessful from './screens/transactionStatus/unsuccessful';
import Login from './screens/login';
import Payments from './screens/paymentsScreen/payments';
import SavingsComponent from './screens/savingsScreen/savings'
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

function Savings({navigation}) {
  return (
  <ScrollView>
      <View style={styles.black}>
        <SafeAreaView>  
          <View>
            <SavingsComponent navigation={navigation} />
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

function LoggedIn({navigation}) {
  return (
    <ScrollView>
      <View style={styles.black}>
        <SafeAreaView>
          <View>
            <Payments navigation={navigation} />
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
            <Payments navigation={navigation} />
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

function SendEmail({navigation}) {
  return (
    <ScrollView>
      <View style={styles.black}>
        <SafeAreaView>  
          <View>
            <SendEmailComponent navigation={navigation} />
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

function EnterAmount({navigation}) {
  return (
    // <ScrollView>
      <View style={styles.black}>
        {/* <SafeAreaView>   */}
          {/* <View> */}
            <EnterAmountComponent navigation={navigation} />
          {/* </View> */}
        {/* </SafeAreaView> */}
      </View>
    
  );
}

function SendMobile({navigation}) {
  return (
    <ScrollView>
      <View style={styles.black}>
        <SafeAreaView>  
          <View>
            <SendMobileComponent navigation={navigation} />
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Pending}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Pending"
          component={Pending}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Successful"
          component={Successful}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Unsuccessful"
          component={Unsuccessful}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterAmount"
          component={EnterAmount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SendEmail"
          component={SendEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SendMobile"
          component={SendMobile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Particle"
          component={Particle}
          navigation={navigation}
          options={{headerShown: false}}
        />
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