import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Linking,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {Text, Icon} from '@rneui/themed';
import {Slider} from 'react-native-elements';

const windowHeight = Dimensions.get('window').height;

class Investments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 'N/A',
      btcPrice: 0,
      leverageValue: 1,
    };
    this.updatePrice = this.updatePrice.bind(this);
  }

  updatePrice() {
    let bitcoinPriceUrl =
      'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
    let newPrice = 'Unavailable.';

    fetch(bitcoinPriceUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          price: responseJson.bpi.USD.rate,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  UNSAFE_componentWillMount() {
    this.updatePrice();
  }
  render() {
    return (
      <View style={styles.black}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <Text style={styles.header}>Investments</Text>

              <View style={styles.component}>
                <View style={styles.btcPrice}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://testnet.app.xade.finance/images/ticker/bitcoin.png',
                    }}
                  />
                  <Text style={styles.btcPriceText}>{this.state.price}</Text>
                </View>
                {/*Candlestick Chart*/}
              </View>

              <View style={styles.component}>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.longButton}>
                    <Text style={styles.longText}>Long 📈</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.shortButton}>
                    <Text style={styles.shortText}>Short 📉</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.priceSlippage}>
                  <View style={styles.price}>
                    <Text style={styles.priceSlippageText}>Price</Text>
                    <Text style={styles.priceSlippageText}>0.00</Text>
                  </View>
                  <View style={styles.slippage}>
                    <Text style={styles.priceSlippageText}>Slippage</Text>
                    <TextInput
                      style={styles.priceSlippageText}
                      placeholder="1%"
                      placeholderTextColor="#fff"
                    />
                  </View>
                </View>
                <View style={styles.usdTo}>
                  <View style={styles.usd}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: 'https://testnet.app.xade.finance/images/ticker/dollar.png',
                      }}
                    />
                    <Text style={styles.usdText}>USD</Text>
                    <TextInput
                      style={styles.usdNumber}
                      placeholder="0.000"
                      keyboardType="numeric"
                      placeholderTextColor="#fff"
                      onChangeText={usd =>
                        this.setState({
                          btcPrice:
                            parseInt(usd) /
                            parseFloat(this.state.price.replace(/,/g, '')),
                        })
                      }
                    />
                  </View>
                  {/*
                <Icon
                  name="arrow-circle-down"
                  type="font-awesome"
                  color="#fff"
                  size={30}
                  containerStyle={{zIndex: '100'}}
                  onPress={() => {}}
                />
              */}
                  <View style={styles.btc}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: 'https://testnet.app.xade.finance/images/ticker/bitcoin.png',
                      }}
                    />
                    <Text style={styles.usdText}>BTC</Text>
                    <Text style={styles.usdNumber}>
                      {this.state.btcPrice.toFixed(3)}
                    </Text>
                  </View>
                </View>
                <View style={styles.leverage}>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.leverageText}>
                      Leverage {parseFloat(this.state.leverageValue).toFixed(0)}
                    </Text>
                  </View>
                  <Slider
                    minimumTrackTintColor={'green'}
                    minimumValue={1}
                    maximumValue={10}
                    trackMarks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    value={this.state.value}
                    onValueChange={value =>
                      this.setState({leverageValue: value})
                    }
                  />
                </View>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('QRScreen')}>
                <Text style={styles.buttonText}>QR</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'VelaSans-Bold',
  },
  black: {
    backgroundColor: '#000',
    width: '100%',
    height: windowHeight,
  },
  button: {
    width: '40%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '30%',
    marginTop: '15%',
    paddingVertical: '5%',
    borderRadius: 50,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'NeueMontreal-Bold',
  },
  component: {
    width: '90%',
    height: windowHeight / 1.5,
    marginTop: '21%',
    marginLeft: '5%',
    borderRadius: 20,
    backgroundColor: '#111',
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '5%',
  },
  longButton: {
    backgroundColor: 'green',
    paddingVertical: '4%',
    paddingHorizontal: '10%',
    borderRadius: 50,
    marginRight: '5%',
  },
  longText: {
    color: 'white',
    fontFamily: 'EuclidCircularA-Regular',
    fontSize: 15,
  },
  shortButton: {
    backgroundColor: 'transparent',
    paddingVertical: '4%',
    paddingHorizontal: '10%',
    borderRadius: 50,
    marginLeft: '5%',
  },
  shortText: {
    color: 'red',
    fontFamily: 'EuclidCircularA-Regular',
    fontSize: 15,
  },
  priceSlippage: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  price: {
    marginRight: '15%',
  },
  slippage: {
    marginLeft: '15%',
  },
  priceSlippageText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'EuclidCircularA-Regular',
    fontSize: 15,
    paddingTop: '10%',
  },
  usdTo: {
    marginTop: '10%',
  },
  usd: {
    backgroundColor: '#222',
    width: '80%',
    marginLeft: '10%',
    marginTop: '%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '4%',
    paddingHorizontal: '2%',
    borderRadius: 20,
  },
  btc: {
    backgroundColor: '#222',
    width: '80%',
    marginLeft: '10%',
    marginTop: '1%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '4%',
    paddingHorizontal: '2%',
    borderRadius: 20,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    justifyContent: 'flex-start',
  },
  usdText: {
    color: 'white',
    fontFamily: 'EuclidCircularA-Regular',
    fontSize: 20,
    marginLeft: '20%',
  },
  usdNumber: {
    color: 'white',
    fontFamily: 'EuclidCircularA-Regular',
    fontSize: 20,
    marginLeft: '30%',
  },
  btcPriceText: {
    color: 'white',
  },
  leverage: {
    width: '80%',
    marginLeft: '10%',
    marginTop: '5%',
  },
  leverageText: {
    fontFamily: 'VelaSans-ExtraBold',
    fontSize: 20,
    color: 'white',
  },
});

export default Investments;
