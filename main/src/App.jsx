import React, {PureComponent} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button} from '@rneui/themed';
import ConnectDemo from './ConnectDemo';
const logo = require('../images/ic_round.png');

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ConnectDemo />
    </View>
  );
}

export default function App() {
  return <HomeScreen></HomeScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '60%',
    marginTop: -200,
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 0,
  },

  buttonStyle: {
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 3,
  },

  containerStyle: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});
