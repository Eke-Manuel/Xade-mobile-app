import React from 'react';
import {TouchableOpacity, TouchableHighlight,SafeAreaView, StyleSheet, View, Linking, ScrollView} from 'react-native';
import {Text} from '@rneui/themed';
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';
import styles from './paymentsStyles'
import {Icon} from 'react-native-elements';

timeToday = Date.now();
endDate = new Date(Date.UTC((year = 2023), (monthIndex = 2), (date = 15)));

var time = (endDate - timeToday) / 1000.0;

const Payments = ({navigation}) => {
  const t = true;
  return (
    <SafeAreaView style = {{width: '100%', height: '100%'}}>
        <LinearGradient colors = {['#222222', '#000']} style={styles.container}>
        <View style={styles.topbar}>
              <Text style={styles.logo}>XADE</Text>
        </View>
          <View style = {styles.fontContainer}>
          <Text style = {{color:'white', fontSize: 45, fontFamily: 'Benzin-Medium'}}>$6438.27</Text>
          <Text style = {{color: 'grey'}}>Your checking balance</Text>
          </View>

          <View style = {styles.buttonsContainer}>
          <TouchableOpacity
                style={styles.mainButton}
                // onPress={() => navigation.navigate('Particle')}
                >
                <LinearGradient colors = {['#3BAE8C', '#1C754A']} style = {styles.buttonIcon}> 
                  <View style = {styles.buttonIconInner}>
                  <Icon
                  // style={styles.tup}
                  name={"arrow-up-left"}
                  // size={40}
                  // color={t?'green': 'red'}
                  type="feather"
                />
                  </View>
                </LinearGradient>

                <Text style = {styles.buttonText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.mainButton}
            >
             <View style = {styles.buttonIcon}> 

            </View>

            <Text style = {styles.buttonText}>Request</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.qrButton}>
              <Icon

                  name={"qr"}
                  // size={40}
                  color={t?'green': 'red'}
                  type="feather"
                />
            </TouchableOpacity>
          </View>

        </LinearGradient>

  
          <View
            style = {styles.transactionContainer}
            >      
            <View style = {styles.heading}>
              <Text style = {{color: 'white', fontSize: 20}}>Transactions</Text>
              <Text style = {{color: 'grey', fontSize: 20}}>See all</Text>
            </View>
            {/* This is supposed to be a loop */}
            <View style = {styles.transactions} >
              <View style = {styles.transactionLeft}>
                <View style = {styles.tlogo}>
                <Icon
                  style={styles.tup}
                  name={t?"arrow-down-right":"arrow-up-left"}
                  size={40}
                  color={t?'green': 'red'}
                  type="feather"
                />
                </View>
                <View style = {styles.ttext}>
                  <Text style = {{color: 'white'}}>Arav</Text>
                  <Text style = {{color: 'grey'}}>25th Dec, 2022</Text>
                </View>
              </View>

              <View style = {styles.transactionRight}>
                <Text style = {{color: 'green', fontSize: 20}}>$2.4</Text>
              </View>
              
            </View>
            {/* ... */}
          </View>
      
    </SafeAreaView>
  );
};

export default Payments;