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
import { useEffect } from 'react';
timeToday = Date.now();
endDate = new Date(Date.UTC((year = 2023), (monthIndex = 2), (date = 15)));
import '../../../../global'
const Web3 = require('web3')


var time = (endDate - timeToday) / 1000.0;
const address = '0x6dD0D673c0C434839A344328B4CdCFf53a53FB9b'
const contractAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
const PaymentsComponent = ({navigation}) => {
  
  const [state, setState] = React.useState([{truth: true, to: '0', from: '0', value: 0}]);
  

  useEffect(() => {
      
      fetch(`https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=${contractAddress}&address=${address}&apikey=26UDEN3Z37KX5V7PS9UMGHU11WAJ38RZ57`)
      .then(response => response.json())    
      .then(data => {
        const result = data.result;
        let len = result.length;
        let arr = []
        for(let i = 0; i < len; i++)
        {
          let res = result[i];
          let val = res.value;
          const etherValue = Web3.utils.fromWei(val, 'ether');
          var pubDate = new Date(res.timeStamp * 1000);
          var weekday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");

var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

var formattedDate =
  monthname[pubDate.getMonth()] + ' '
  + pubDate.getDate() + ', ' + pubDate.getFullYear()
          const json = {
            truth: (result == res.to), // true while accepting
            to: res.to,
            from: res.from,
            value: etherValue,
            date: formattedDate,
          };
          arr.push(json);
        }
        console.log(arr)
        setState(arr);
        console.log(data.result)
      })
      

  }, []);
  const t = true; // it means to send
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
        {state.map((json) => {
           return <View style={styles.transactions}>
           <View style={styles.transactionLeft}>
             <Image
               source={require('./icon/negative.png')}
               style={{borderWidth: 1}}
             />
             <View style={styles.ttext}>
             <TouchableHighlight onPress={() => {
              Clipboard.setString(((json.truth)?json.to:json.from));
              Alert.alert('Copied Address To Clipboard');
            }}>
               <Text style={{color: 'white', fontFamily: 'VelaSans-Bold'}}>
                 {((json.truth)?json.to:json.from).slice(0, 10)}...
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
                 color: ((json.truth) ? '#4EE58B' : 'red'),
                 fontSize: 20,
                 fontFamily: 'VelaSans-Bold',
               }}>
               {((json.truth) ? '+' : '-')}4
             </Text>
           </View>
         </View>
        
        })}

        
      </View>
    </SafeAreaView>
  );
};

export default PaymentsComponent;
