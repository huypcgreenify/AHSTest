import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LogoAHS from '../../assets/svg/logoAHS.svg';
import {mockWelcome} from './mock/welcome';
const imageBackgroundSourced = require('../../assets/BackGrApp.png');

const WelcomeScreen = (props: any) => {
  const handleBtnStartWelcome = () => {
    Alert.alert('Ok');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={imageBackgroundSourced} //Khai báo ra biến chứa require (Done)
        resizeMode="cover">
        <LogoAHS style={styles.logo} width={89} height={150} />
        {/**hard code khai báo ra component riêng gọi lại (Done)*/}
        <Text style={styles.textWT}>
          {mockWelcome.welcomeBlack}{' '}
          <Text style={styles.textInWT}>{mockWelcome.welcomePrimary}</Text>
        </Text>
        <TouchableOpacity
          style={styles.touchOpacity}
          onPress={() => {
            handleBtnStartWelcome(); //Khai báo hàm riêng, gọi lại (Done)
          }}>
          <Text style={styles.textInTouchOpacity}>{mockWelcome.start}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 40,
  },
  textWT: {
    color: '#212529',
    fontSize: 32,
    fontFamily: 'Montserrat',
    marginBottom: 67,
  },
  textInWT: {
    color: '#0077B6',
  },
  textInTouchOpacity: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 24,
  },
  touchOpacity: {
    borderRadius: 51,
    backgroundColor: '#0077B6',
    paddingHorizontal: 29,
    paddingTop: 20,
    paddingBottom: 21,
  },
});

export default WelcomeScreen;
