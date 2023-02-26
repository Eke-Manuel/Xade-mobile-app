import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const buttons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', '⌫'],
  ];

  function renderButtons() {
    return buttons.map((row, i) => {
      return (
        <View key={`row-${i}`} style={styles.row}>
          {row.map((button) => {
            return (
              <TouchableOpacity  key={`button-${button}`} style={styles.button}>
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    });
  }
  export default function App({navigation}) {
    let [amount, setAmount] = React.useState(0);

    function handleButtonPress(button) {
      if(button !== '' && button !== '⌫')
      {
        let num = parseInt(button);
        setAmount(amount*10+num);
      }
      else if(button === '⌫') setAmount(parseInt(amount/10));
    }
    return (
      <View style = {styles.container}>
        <View style = {{marginTop: '10%', alignItems: 'center'}}>
          <View><Text style = {{fontSize: 25, fontFamily: 'VelaSans-Medium', 'color': 'white'}}>Enter Amount</Text></View>
          <View style = {{marginTop: 60, flexDirection: 'row', alignItems: 'flex-end'}}><Text style = {{marginBottom: 4,marginRight:4,fontSize: 45,color: 'white'}}>$</Text><Text  style = {{fontSize: 60, color: 'white'}}>{amount}</Text></View>
        </View>
        <View style = {{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <View style = {styles.detailsLol}>
        <Text style = {{color: 'white', fontFamily: 'VelaSans-Medium', fontSize: 20}}>Arnav Jhajharia</Text>
            <Text style = {{marginLeft: 0,color: 'lightgrey', fontFamily: 'VelaSans-Medium', fontSize: 13}}>Wallet Address: 0xddsdf29fefe...</Text>
            <Text style = {{marginLeft:0,color: 'lightgrey', fontFamily: 'VelaSans-Medium', fontSize: 13}}>Estimated gas: 0</Text>
          </View>
      {
        buttons.map((row, i) => {
        return (
          <View key={`row-${i}`} style={styles.row}>
            {row.map((button) => {
              return (
                <TouchableOpacity onPress = {() => {handleButtonPress(button)}} key={`button-${button}`} style={styles.button}>
                  <Text style={styles.buttonText}>{button}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          
        );
      })}
          <TouchableOpacity /*onPress = {() => navigation.navigate('TransactionStatus')} */ style = {styles.confirmButton}>
            <Text style = {{color: 'white', fontFamily: 'VelaSans-Medium', fontSize: 18}}>Continue</Text>
            
          </TouchableOpacity>  
        </View>
   
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    },
    row: {
      flexDirection: 'row',
      // marginBottom: 10,
      // borderBottomWidth: 0.2,
      borderColor: 'grey',
    },
    button: {
      width: 90,
      height: 65,
      // backgroundColor: 'gray',
      borderRadius: 25,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginHorizontal: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 24,
    },
    confirmButton: {
      width: '80%',
      marginBottom: 20,
      alignItems: 'center',
      height: 55,
      // borderColor: 'white',
      borderWidth: 1,
      justifyContent: 'center',
      borderRadius: 30,
      // color: 'white',
      backgroundColor: '#67CA83',
  },
  detailsLol: {
    width: '80%',
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingLeft: 20,
    height: 85,
    // borderColor: 'white',
    // borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
    // color: 'white',
    backgroundColor: '#232E34',
    shadowColor: 'rgb(76, 204, 232)',
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.3,
// shadowRadius: 1000.00,

elevation: 24,
  }

  
  });


  
