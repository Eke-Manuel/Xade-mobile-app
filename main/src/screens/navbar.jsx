import React from 'react';

import {View, StyleSheet} from 'react-native';

import {Text} from 'react-native-elements';
import {Icon} from 'react-native-elements';
const Web3 = require('web3');
import LinearGradient from 'react-native-linear-gradient';

const BottomNavbar = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#0C0C0C', '#fff', '#0C0C0C']}
          style={styles.top}></LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={styles.navItem}>
            <Icon
              name="home"
              type="foundation"
              style={styles.icon}
              onPress={() => navigation.navigate('Payments')}
              color={'#f0f0f0'}
            />
            <Text style={styles.navItemText}>Home</Text>
          </View>

          <View style={styles.navItem}>
            <Icon
              name="save"
              type="font-awesome5"
              style={styles.icon}
              onPress={() => navigation.navigate('Savings')}
              color={'#f0f0f0'}
            />
            <Text style={styles.navItemText}>Savings</Text>
          </View>
          <View style={styles.navItem}>
            <Icon
              name="money"
              type="font-awesome"
              style={styles.icon}
              onPress={() => navigation.navigate('Investments')}
              color={'#f0f0f0'}
            />
            <Text style={styles.navItemText}>Investments</Text>
          </View>
          <View style={styles.navItem}>
            <Icon
              name="shop"
              type="entypo"
              style={styles.icon}
              onPress={() => navigation.navigate('ComingSoon')}
              color={'#f0f0f0'}
            />
            <Text style={styles.navItemText}>Shop</Text>
          </View>
          <View style={styles.navItem}>
            <Icon
              name="credit-card-alt"
              type="font-awesome"
              style={styles.icon}
              size={22}
              onPress={() => navigation.navigate('ComingSoon')}
              color={'#f0f0f0'}
            />
            <Text style={styles.navItemText}>Card</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    height: 1,
    width: '100%',
    marginBottom: 20,
  },
  container: {
    backgroundColor: '#0C0C0C',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
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

export default BottomNavbar;
