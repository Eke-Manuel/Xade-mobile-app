import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

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

export default styles;
