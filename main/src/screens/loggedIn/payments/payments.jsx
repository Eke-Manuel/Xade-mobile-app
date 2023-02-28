import React from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  View,
  Linking,
  ScrollView,
  Image,
} from 'react-native';
import {Text} from '@rneui/themed';
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';
import styles from './payments-styles';
import {Icon} from 'react-native-elements';

timeToday = Date.now();
endDate = new Date(Date.UTC((year = 2023), (monthIndex = 2), (date = 15)));

var time = (endDate - timeToday) / 1000.0;

const PaymentsComponent = ({navigation}) => {
  const t = true;
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <View colors={['#222222', '#000']} style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.logo}>XADE</Text>
        </View>
        <View style={styles.fontContainer}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text
              style={{
                color: '#6D797D',
                fontSize: 45,
                fontFamily: 'Benzin-Medium',
              }}>
              $
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 45,
                fontFamily: 'Benzin-Medium',
              }}>
              12043
            </Text>
            <Text
              style={{
                color: '#6D797D',
                fontSize: 30,
                fontFamily: 'Benzin-Medium',
                marginBottom: 5,
              }}>
              .52
            </Text>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontFamily: 'VelaSans-Regular',
            }}>
            Your checking balance
          </Text>
        </View>

        {/* <View style = {styles.buttonsContainer}>
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
          </View> */}
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 50,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={styles.depWith}
            onPress={() => {
              navigation.navigate('SendEmail');
            }}>
            <LinearGradient
              colors={['#1D2426', '#383838']}
              useAngle
              angle={45}
              angleCenter={{x: 0.5, y: 0.5}}
              style={styles.innerDep}>
              <Icon
                // style={styles.tup}
                name={'paper-plane'}
                size={20}
                color={'#86969A'}
                type="font-awesome"
                // style = {{marginRight: '1%'}}
              />
              <Text style={{color: '#86969A', fontFamily: 'VelaSans-Bold'}}>
                Send
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.depWith}
            onPress={() => {
              navigation.navigate('EnterAmount');
            }}>
            <LinearGradient
              colors={['#1D2426', '#383838']}
              useAngle
              angle={45}
              angleCenter={{x: 0.5, y: 0.5}}
              style={styles.innerDep}>
              <Icon
                // style={styles.tup}
                name={'arrow-circle-down'}
                color={'#86969A'}
                // size={40}
                // color={t?'green': 'red'}
                type="font-awesome"
              />
              <Text style={{color: '#86969A', fontFamily: 'VelaSans-Bold'}}>
                Deposit
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.depWith}
            onPress={() => {
              navigation.navigate('QRScreen');
            }}>
            <LinearGradient
              colors={['#1D2426', '#383838']}
              useAngle
              angle={45}
              angleCenter={{x: 0.5, y: 0.5}}
              style={styles.innerDep}>
              <Icon
                // style={styles.tup}
                name={'plus'}
                // size={40}
                color={'#86969A'}
                type="feather"
              />
              <Text style={{color: '#86969A', fontFamily: 'VelaSans-Bold'}}>
                Scan
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.transactionContainer}>
        <View style={styles.heading}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Transactions
          </Text>
          {/* <Text style = {{color: 'grey', fontSize: 20}}>See all</Text> */}
        </View>
        {/* This is supposed to be a loop */}
        <View style={styles.transactions}>
          <View style={styles.transactionLeft}>
            <Image
              source={require(`./icon/${t ? 'positive' : 'negative'}.png`)}
              style={{borderWidth: 1}}
            />
            <View style={styles.ttext}>
              <Text style={{color: 'white', fontFamily: 'VelaSans-Bold'}}>
                Arav
              </Text>
              <Text style={{color: 'grey', fontFamily: 'VelaSans-Bold'}}>
                25th Dec, 2022
              </Text>
            </View>
          </View>

          <View style={styles.transactionRight}>
            <Text
              style={{
                color: t ? '#4EE58B' : 'red',
                fontSize: 20,
                fontFamily: 'VelaSans-Bold',
              }}>
              {t ? '+' : '-'}$2.4
            </Text>
          </View>
        </View>
        {/* ... */}
      </View>
    </SafeAreaView>
  );
};

export default PaymentsComponent;
