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

import '../global';
import {Icon} from 'react-native-elements';
import StaticHomeScreen from './screens/loggingIn/home';
import Login from './screens/loggingIn/login';
import Countdown from './screens/loggedIn/countdown/countdown';
import QRPage from './screens/loggedIn/qr/qr';
import Investments from './screens/loggedIn/investments/investments';
import SendEmailComponent from './screens/loggedIn/send/sendEmail';
import SendMobileComponent from './screens/loggedIn/send/sendMobile';
import EnterAmountComponent from './screens/enterAmount';
import SavingsComponent from './screens/loggedIn/savings/savings';
import PaymentsComponent from './screens/loggedIn/payments/payments';
import Pending from './screens/loggedIn/txStatus/pending';
import Successful from './screens/loggedIn/txStatus/successful';
import Unsuccessful from './screens/loggedIn/txStatus/unsuccessful';
import LinearGradient from 'react-native-linear-gradient';

import {Text} from 'react-native-elements';
const Web3 = require('web3');
const Stack = createNativeStackNavigator();
const bg = require('../assets/bg.png');
const windowHeight = Dimensions.get('window').height;

const BottomNavbar = ({name}) => {
  return (
    <View>
      <View style={styles2.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#000', '#fff', '#000']}
          style={styles2.top}></LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={styles2.navItem}>
            <Icon
              name="house-blank"
              type="font-awesome"
              style={styles2.icon}
              // size={30}
              // containerStyle={{zIndex: '100'}}
              onPress={() => {}}
            />
            <Text style={styles2.navItemText}>Home</Text>
          </View>

          <View style={styles2.navItem}>
            <Icon
              name="arrow-circle-down"
              type="font-awesome"
              style={styles2.icon}
              // size={30}
              // containerStyle={{zIndex: '100'}}
              onPress={() => {}}
            />
            <Text style={styles2.navItemText}>Savings</Text>
          </View>
          <View style={styles2.navItem}>
            <Icon
              name="fa-solid fa-piggy-bank"
              type="font-awesome"
              style={styles2.icon}
              // size={30}
              // containerStyle={{zIndex: '100'}}
              onPress={() => {}}
            />
            <Text style={styles2.navItemText}>Investments</Text>
          </View>
          <View style={styles2.navItem}>
            <Icon
              name="fa-solid fa-piggy-bank"
              type="font-awesome"
              style={styles2.icon}
              // size={30}
              // containerStyle={{zIndex: '100'}}
              onPress={() => {}}
            />
            <Text style={styles2.navItemText}>Shop</Text>
          </View>
          <View style={styles2.navItem}>
            <Icon
              name="fa-solid fa-piggy-bank"
              type="font-awesome"
              style={styles2.icon}
              // size={30}
              // containerStyle={{zIndex: '100'}}
              onPress={() => {}}
            />
            <Text style={styles2.navItemText}>Card</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles2 = StyleSheet.create({
  top: {
    height: 1,
    width: '100%',
  },
  container: {
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#fff',
    // borderTopWidth: 1,
    // borderTopColor: '#ddd',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemText: {
    fontFamily: 'VelaSans-Light',
    fontSize: 10,
    color: '#fff',
    marginTop: 4,
  },
  icon: {
    color: '#fff',
  },
});

function Particle({navigation}) {
  return (
    <View>
      <Login navigation={navigation} />
    </View>
  );
}

function LoggedIn({navigation}) {
  return (
    <ScrollView>
      <View style={styles.black}>
        <SafeAreaView>
          <View>
            <Countdown navigation={navigation} />
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
            <Countdown navigation={navigation} />
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

function EnterAmount({navigation, route}) {
  return (
    // <ScrollView>
    <View style={styles.black}>
      {/* <SafeAreaView>   */}
      {/* <View> */}
      <EnterAmountComponent navigation={navigation} route={route} />
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
      <BottomNavbar name="savings" />
    </ScrollView>
  );
}

function Payments({navigation}) {
  return (
    <ScrollView>
      <View style={styles.black}>
        <SafeAreaView>
          <View>
            <PaymentsComponent navigation={navigation} />
          </View>
        </SafeAreaView>
      </View>
      <BottomNavbar name="payments" />
    </ScrollView>
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
        <Stack.Screen
          name="QRScreen"
          component={QRPage}
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Investments"
          component={Investments}
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterAmount"
          component={EnterAmount}
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SendEmail"
          component={SendEmail}
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SendMobile"
          component={SendMobile}
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Savings"
          component={Savings}
          navigation={navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payments"
          component={Payments}
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
