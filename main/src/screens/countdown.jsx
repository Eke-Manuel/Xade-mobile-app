import React from 'react';
import {TouchableOpacity, StyleSheet, View, Linking} from 'react-native';
import {Text} from '@rneui/themed';
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';

timeToday = Date.now();
endDate = new Date(Date.UTC((year = 2023), (monthIndex = 2), (date = 15)));

var time = (endDate - timeToday) / 1000.0;

const Countdown = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.topContent}>
          <Text style={styles.launch}>
            Xade Mainnet V1 is launching on {'\n'}
            15th March 2023 at 10pm UTC
          </Text>
        </View>
        <View style={styles.countdown}>
          <CountDown
            style={styles.counter}
            digitStyle={{background: 'transparent'}}
            digitTxtStyle={styles.digits}
            timeLabelStyle={styles.timeLabels}
            timeLabels={{d: 'Days', h: 'Hours', m: 'Mins', s: 'Seconds'}}
            until={time}
            size={40}
          />
        </View>
        <Text style={styles.subText}>The countdown has already begun...</Text>
        <LinearGradient colors={['#ff4869', '#fa06ff']} style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://discord.com/channels/1023970802099572847/1039229895781404692',
              )
            }>
            <Text style={styles.buttonText}>Take Part In Private Beta</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
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
    marginTop: '20%',
    width: '100%',
    backgroundColor: 'transparent',
  },

  topContent: {
    width: '100%',
    backgroundColor: 'transparent',
  },

  launch: {
    color: '#fff',
    fontFamily: 'NeueMontreal-Bold',
    textAlign: 'center',
    fontSize: 25,
  },

  countdown: {
    marginTop: '25%',
    width: '100%',
  },

  digits: {
    fontFamily: 'NeueMachina-UltraBold',
    color: '#E8FF59',
  },

  timeLabels: {
    color: '#fff',
    fontFamily: 'NeueMachina-UltraBold',
  },

  subText: {
    color: '#999',
    fontFamily: 'VelaSans-Bold',
    textAlign: 'center',
    fontSize: 17,
    marginTop: '30%',
  },

  button: {
    width: '70%',
    borderRadius: 50,
    marginLeft: '15%',
    marginTop: '20%',
    paddingVertical: '5%',
    backgroundColor: '#000',
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'VelaSans-Medium',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Countdown;
