import React, {useState} from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  View,
  Image,
} from 'react-native';
import {Text} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import styles from './payments-styles';
import {Icon} from 'react-native-elements';
import {useEffect} from 'react';
import * as particleAuth from 'react-native-particle-auth';

const contractAddress = '0xA3C957f5119eF3304c69dBB61d878798B3F239D9';

const PaymentsComponent = ({navigation}) => {
  const [state, setState] = React.useState([
    {truth: true, to: '0', from: '0', value: 0},
  ]);
  const [address, setAddress] = useState('0x');

  useEffect(() => {
    console.log('Global Account:', global.loginAccount);
    console.log('Is Auth:', global.withAuth);

    if (global.withAuth) {
      var authAddress = global.loginAccount.publicAddress;
    } else {
      var authAddress = global.connectAccount.publicAddress;
    }

    setAddress(authAddress.toString());

    fetch(
      `https://api-testnet.polygonscan.com/api?module=account&action=tokentx&contractaddress=${contractAddress}&address=${address}&apikey=26UDEN3Z37KX5V7PS9UMGHU11WAJ38RZ57`,
    )
      .then(response => response.json())
      .then(data => {
        if (data.message != 'NOTOK') {
          console.log(data.message);
          console.log(data);
          const result = data.result;
          let len = result.length;
          let arr = [];
          for (let i = 0; i < len; i++) {
            let res = result[i];
            let val = res.value;
            const etherValue = val;
            var pubDate = new Date(res.timeStamp * 1000);
            var weekday = new Array(
              'Sun',
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat',
            );

            var monthname = new Array(
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            );

            var formattedDate =
              monthname[pubDate.getMonth()] +
              ' ' +
              pubDate.getDate() +
              ', ' +
              pubDate.getFullYear();
            const json = {
              truth: result == res.to, // true while accepting
              to: res.to,
              from: res.from,
              value: etherValue,
              date: formattedDate,
            };
            arr.push(json);
          }
          console.log(arr);
          setState(arr);
          console.log(data.result);
        } else {
          console.log('Condition is working');
          setState([{value: 0}]);
          return;
        }
      });
  }, []);
  const t = true; // it means to send]
  console.log('Address: ', address);
  console.log('State: ', state);

  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <View colors={['#222222', '#000']} style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.logo}>Payments</Text>
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

        <View
          style={{
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
              navigation.navigate('ComingSoon');
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
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'VelaSans-Bold',
            }}>
            Transactions
          </Text>
          {/* <Text style = {{color: 'grey', fontSize: 20}}>See all</Text> */}
        </View>
        {state[0].value > 0 ? (
          state.map(json => {
            console.log(state);
            return (
              <View style={styles.transactions}>
                <View style={styles.transactionLeft}>
                  <Image
                    source={require('./icon/negative.png')}
                    style={{borderWidth: 1}}
                  />
                  <View style={styles.ttext}>
                    <TouchableHighlight
                      onPress={() => {
                        Clipboard.setString(json.truth ? json.to : json.from);
                        Alert.alert('Copied Address To Clipboard');
                      }}>
                      <Text
                        style={{color: 'white', fontFamily: 'VelaSans-Bold'}}>
                        {(json.truth ? json.to : json.from).slice(0, 10)}...
                      </Text>
                    </TouchableHighlight>

                    <Text style={{color: 'grey', fontFamily: 'VelaSans-Bold'}}>
                      {json.date}
                    </Text>
                  </View>
                </View>

                <View style={styles.transactionRight}>
                  <Text
                    style={{
                      color: json.truth ? '#4EE58B' : 'red',
                      fontSize: 20,
                      fontFamily: 'VelaSans-Bold',
                    }}>
                    {json.truth ? '+' : '-'}4
                  </Text>
                </View>
              </View>
            );
          })
        ) : (
          <View>
            <Text style={styles.noTransaction}>
              Your Transactions Appear Here
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PaymentsComponent;
