import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LogoAHS from '../../assets/svg/LogoAHS.svg';

const WelcomeScreen = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/BackGrApp.png')}
        resizeMode="cover">
        <LogoAHS style={styles.logo} width={'89'} height={'150'} />
        <Text style={styles.textWT}>
          Welcome To{' '}
          <Text style={styles.textInWT}>AdelCoHome Services Inc.</Text>
        </Text>
        <TouchableOpacity
          style={styles.touchOpacity}
          onPress={() => {
            alert('Ok');
          }}>
          <Text style={styles.textInTouchOpacity}>Get Started</Text>
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
