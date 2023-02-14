import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
} from 'react-native';
import {Text} from '@rneui/themed';
import {Icon} from 'react-native-elements';

const bg = require('../../assets/bg.png');
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.topbar}>
              <Text style={styles.logo}>XADE</Text>
            </View>
            <View style={styles.mainContent}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ParticleConnect')}>
                <Icon
                  style={styles.buttonIcon}
                  name="arrow-right"
                  size={30}
                  color="black"
                  type="feather"
                />
                <Text style={styles.buttonText}>Connect</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('LoggedIn')}>
                <Icon
                  style={styles.buttonIcon}
                  name="arrow-right"
                  size={30}
                  color="black"
                  type="feather"
                />
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
  },

  container: {
    width: '100%',
    height: '80%',
  },

  topbar: {
    width: '100%',
    backgroundColor: 'transparent',
  },

  logo: {
    fontFamily: 'LemonMilk-Regular',
    color: '#fff',
    fontSize: 30,
    marginLeft: '8%',
    marginTop: '2%',
  },

  mainContent: {
    width: '100%',
    backgroundColor: 'transparent',
    marginTop: '90%',
  },

  button: {
    width: '75%',
    color: '#000',
    borderRadius: 15,
    marginLeft: '12%',
    marginTop: '15%',
    padding: '5%',
    backgroundColor: '#E8FF59',
    marginBottom: '5%',
  },

  buttonText: {
    color: '#000',
    fontFamily: 'VelaSans-Bold',
    fontSize: 20,
    marginTop: '-11.7%',
    marginLeft: '2%',
  },

  buttonIcon: {
    marginLeft: '80%',
  },
});

export default Login;
