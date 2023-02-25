import React, {Component, useState, useEffect} from 'react';
import {Text} from '@rneui/themed';
import {Icon} from 'react-native-elements';
import Clipboard from '@react-native-clipboard/clipboard';

import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
  Platform,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';

import * as particleAuth from 'react-native-particle-auth';

import QR from '../../QRGenerator';
import {logout} from '../../ParticleAuth';

const bg = require('../../../assets/particle.jpg');
const windowHeight = Dimensions.get('window').height;

function QRCode() {
  const [address, setAddress] = useState(0);
  const [info, setInfo] = useState(1);

  useEffect(() => {
    const fetchAddress = async () => {
      response = await particleAuth.getAddress();
      responseInfo = await particleAuth.getUserInfo();
      console.log('Inner QR Address Response: ' + response);
      console.log('Inner QR User Response: ', JSON.parse(responseInfo));

      refinedInfo = JSON.parse(responseInfo);
      if (refinedInfo.name) {
        setInfo(refinedInfo.name);
      } else if (refinedInfo.email) {
        setInfo(refinedInfo.email);
      } else if (refinedInfo.phone) {
        setInfo(refinedInfo.phone);
      } else if (refinedInfo.appleEmail) {
        setInfo(refinedInfo.appleEmail);
      } else {
        setInfo('unknown');
      }
      setAddress(response);
    };

    const result = fetchAddress().catch(console.error);
  }, []);

  const qrUrl = String(info) + '-xade-' + String(address);
  console.log('Address: ', address);
  console.log('User Info: ', info);
  return (
    <View>
      <View>
        <Text style={styles.header}>QR Code</Text>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{info}</Text>
          <TouchableHighlight
            onPress={() => {
              Clipboard.setString(String(address));
              Alert.alert('Copied Address To Clipboard');
            }}>
            <Text style={styles.address}>{address}</Text>
          </TouchableHighlight>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.qr}>
            <QR value={qrUrl} />
          </View>
        </View>
      </View>
      <Text onPress={() => this.logout()} style={styles.logout}>
        Logout
      </Text>
    </View>
  );
}

QRScanner = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [openScanner, setOpenScanner] = useState(true);

  const onOpenlink = () => {
    Linking.openURL(qrvalue);
  };

  const onBarcodeScan = qrvalue => {
    setQrvalue(qrvalue);
    setOpenScanner(false);
  };

  const onOpenScanner = () => {
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs permission for camera access',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setQrvalue('');
            setOpenScanner(true);
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }
      requestCameraPermission();
    } else {
      setQrvalue('');
      setOpenScanner(true);
    }
  };

  return (
    <View>
      <Text style={styles.header}>QR Scanner</Text>
      {openScanner ? (
        <View style={styles.QRcontainer}>
          <CameraScreen
            style={{marginTop: '-10%', width: 250, height: 350}}
            showFrame={true}
            scanBarcode={true}
            laserColor={'transparent'}
            frameColor={'transparent'}
            colorForScannerFrame={'transparent'}
            onReadCode={event =>
              onBarcodeScan(event.nativeEvent.codeStringValue)
            }
          />
          <TouchableHighlight style={styles.bottomButton}>
            <Text style={styles.bottomText}>
              Send To Email Address Or Mobile Instead
            </Text>
          </TouchableHighlight>
        </View>
      ) : (
        <View style={styles.QRcontainer}>
          <Text style={styles.scannedStyle}>
            {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
          </Text>
          {qrvalue.includes('https://') ||
          qrvalue.includes('http://') ||
          qrvalue.includes('geo:') ? (
            <TouchableHighlight onPress={onOpenlink}>
              <Text style={styles.textLinkStyle}>
                {qrvalue.includes('geo:') ? 'Open in Map' : 'Open Link'}
              </Text>
            </TouchableHighlight>
          ) : null}
        </View>
      )}
    </View>
  );
};

class QRPage extends Component {
  constructor() {
    super();

    this.state = {
      status: true,
    };
  }

  ShowQRScanner = () => {
    if (this.state.status == true) {
      this.setState({status: false});
    } else {
      this.setState({status: true});
    }
  };

  render(navigation) {
    return (
      <ImageBackground source={bg} style={styles.bg}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.topbar}>
                <Icon
                  style={styles.buttonIcon}
                  name="arrow-left"
                  size={30}
                  color="white"
                  type="feather"
                  onPress={() => this.props.navigation.navigate('Particle')}
                />
                <View style={styles.nav}>
                  <TouchableOpacity
                    style={styles.navLeft}
                    onPress={() => this.ShowQRScanner()}>
                    <Text style={styles.leftText}>Code</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.navRight}
                    onPress={() => {
                      this.ShowQRScanner();
                    }}>
                    <Text style={styles.rightText}>Scan</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.mainContent}>
                {this.state.status ? <QRCode /> : <QRScanner />}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: windowHeight,
    flexDirection: 'column',
  },

  container: {
    width: '100%',
  },

  topbar: {
    width: '100%',
    height: windowHeight / 5,
    alignContent: 'flex-start',
  },

  buttonIcon: {
    color: '#fff',
    float: 'left',
    marginRight: '80%',
  },

  nav: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '50%',
    marginLeft: '25%',
  },

  navLeft: {
    justifyContent: 'flex-start',
    paddingVertical: '10%',
    paddingHorizontal: '15%',
    borderWidth: 2,
    borderColor: '#fff',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },

  leftText: {
    fontFamily: 'NeueMontreal-Bold',
    color: '#fff',
    fontSize: 15,
  },

  navRight: {
    justifyContent: 'flex-end',
    paddingVertical: '10%',
    paddingHorizontal: '15%',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  rightText: {
    fontFamily: 'NeueMontreal-Bold',
    color: '#000',
    fontSize: 15,
  },

  mainContent: {
    width: '100%',
    height: windowHeight - windowHeight / 5,
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },

  header: {
    textAlign: 'center',
    fontFamily: 'NeueMachina-UltraBold',
    fontSize: 30,
    color: '#fff',
    marginTop: '-5%',
  },

  qr: {
    backgroundColor: 'transparent',
    alignContent: 'center',
    padding: '2%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 215,
  },

  logout: {
    textAlign: 'center',
    fontFamily: 'NeueMachina-UltraBold',
    fontSize: 30,
    color: '#fff',
    marginBottom: '15%',
    marginTop: '20%',
  },

  userInfo: {
    marginTop: '10%',
  },

  name: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontFamily: 'VelaSans-ExtraBold',
  },

  address: {
    color: 'white',
    marginTop: '5%',
    fontFamily: 'VelaSans-Bold',
    textAlign: 'center',
    fontSize: 14,
  },

  QRcontainer: {
    marginTop: '25%',
    alignItems: 'center',
  },

  bottomButton: {
    color: 'white',
    backgroundColor: 'transparent',
  },

  bottomText: {
    fontSize: 15,
    color: '#409eff',
    textAlign: 'center',
    fontFamily: 'VelaSans-ExtraBold',
    marginTop: windowHeight - windowHeight / 1.15,
  },

  scannedStyle: {
    color: 'white',
  },
});

export default QRPage;
