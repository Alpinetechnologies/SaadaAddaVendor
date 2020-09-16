import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import MailIcon from 'react-native-vector-icons/Feather';
import BackIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const ForgetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <StatusBar backgroundColor={Colors.primaryGradient} />
        <View style={styles.logoContainer}>
          <View style={styles.backButtonContainer}>
            <Button
              type="clear"
              title="Back"
              titleStyle={styles.backText}
              buttonStyle={styles.backButton}
              onPress={() => navigation.goBack()}
              icon={
                <BackIcon
                  name="ios-arrow-back"
                  color="#999999"
                  style={{ marginHorizontal: 10, marginTop: 2 }}
                />
              }
            />
          </View>
          <Image
            source={require('../../../assests/images/logo.jpg')}
            style={styles.logoImage}
            resizeMode={'center'}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.signInText}>Forget your password?</Text>
          <Text style={styles.secondaryText}>
            No worries,Please enter your registered email address.We will send
            you an email.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Icon name="phone" size={18} style={styles.inputLogo} />
            <TextInput
              value={email}
              placeholder="Enter your registered phone number"
              onChangeText={text => setEmail(text)}
              style={styles.input}
              keyboardType="number-pad"
            />
          </View>

          <LinearGradient
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 1, y: 0 }}
            colors={[Colors.primaryGradient, Colors.secondaryGradient]}
            style={styles.gradient}>
            <Text style={styles.btnText}>SEND OTP </Text>
          </LinearGradient>
          <View style={styles.joinContainer}>
            <Text style={styles.joinText}>Password remembered?</Text>
            <Button
              title="Sign in"
              type="clear"
              titleStyle={styles.signUpBtn}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: '#999999',
    fontSize: 12,
  },
  secondaryText: { width: '80%', fontSize: 16 },
  backButton: {},
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.mainColor,
  },
  logoImage: {
    width: '50%',
    height: '100%',
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    left: '10%',
    marginVertical: '10%',
  },
  gradient: {
    width: '90%',
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 2,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 21,
    width: '89%',
    marginVertical: 20,
  },
  inputLogo: {
    marginLeft: '10%',
    color: '#999999',
  },
  input: {
    marginLeft: '5%',
    color: '#999999',
  },
  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 0,
  },
  passwordIcon: { marginRight: 10 },

  titleStyle: {
    textAlign: 'center',
    color: 'white',
    letterSpacing: 3,
  },
  circleGradient: {
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: 12,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    right: '10%',
    marginBottom: 10,
  },
  forgotText: {
    color: '#999999',
    fontSize: 12,
    lineHeight: 15,
  },
  orContainer: {
    marginVertical: 15,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialMediaLogosContainer: {
    marginLeft: 5,
    width: 24,
    height: 24,
    flexDirection: 'row',
  },
  socialMediaLogos: {
    width: '100%',
    height: '100%',
    marginHorizontal: 4,
  },
  socialText: {
    fontSize: 14,
    lineHeight: 18,
  },
  joinContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: 10,
  },
  joinText: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  signUpBtn: {
    color: Colors.primaryGradient,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
});

export default ForgetPasswordScreen;
