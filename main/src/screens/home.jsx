import React, {PureComponent} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {Button, Text} from '@rneui/themed';
import {Icon} from 'react-native-elements';

const bg = require('../../assets/bg.png');
/*
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ConnectDemo />
    </View>
  );
}
*/
const StaticHomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.logo}>XADE</Text>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.mainText}>One app to manage all your finances</Text>
        <Text style={styles.subText}>
          A financial super app powered by advanced DeFi protocols
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ParticleAuth')}>
          <Icon
            style={styles.buttonIcon}
            name="arrow-right"
            size={30}
            color="black"
            type="feather"
          />
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 900,
  },

  topbar: {
    width: '100%',
    backgroundColor: 'transparent',
  },

  logo: {
    fontFamily: 'LemonMilk-Regular',
    color: '#fff',
    fontSize: 30,
    marginTop: 65,
    marginLeft: 35,
  },

  mainContent: {
    width: '100%',
    height: '100%',
    marginTop: '20%',
    backgroundColor: 'transparent',
  },

  mainText: {
    color: '#fff',
    fontFamily: 'VelaSans-Bold',
    fontSize: 54,
    width: '72%',
    marginLeft: 35,
    marginTop: 65,
  },

  subText: {
    color: '#979797',
    fontFamily: 'VelaSans-Medium',
    fontSize: 20,
    width: '75%',
    marginLeft: '10%',
    marginTop: 35,
  },

  button: {
    width: '75%',
    color: '#000',
    borderRadius: 15,
    marginLeft: '12%',
    marginTop: 60,
    padding: 20,
    backgroundColor: '#E8FF59',
  },

  buttonText: {
    color: '#000',
    fontFamily: 'VelaSans-Bold',
    fontSize: 20,
    marginTop: '-11.5%',
    marginLeft: '2%',
  },

  buttonIcon: {
    marginLeft: '80%',
  },
});

export default StaticHomeScreen;
