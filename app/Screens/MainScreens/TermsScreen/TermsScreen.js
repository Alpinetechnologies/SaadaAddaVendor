import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from 'react-native-vector-icons/Ionicons';
import { Button, CheckBox } from 'react-native-elements';
import Colors from '../../../constants/Colors';

const TermScreen = ({ navigation }) => {
  const [termCheck, setTermCheck] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                    style={styles.backIcon}
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
          <View style={styles.mainContent}>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Terms of service</Text>
              <Text style={styles.secondaryText}>
                Please confirm that you agree to our Terms of Service and
                Privacy policy:
              </Text>
            </View>
            <View style={styles.termCheckContainer}>
              <CheckBox
                checked={termCheck}
                checkedColor={Colors.primaryGradient}
                onPress={() => setTermCheck(value => !value)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <Text style={styles.agreeText}>I agree to the </Text>
                <Text style={styles.gradientText}>{`Terms & Conditions `}</Text>
                <Text style={styles.agreeText}>and the </Text>
                <Text style={styles.gradientText}>Privacy Policy</Text>
              </View>
            </View>

            <TouchableWithoutFeedback
              disabled={!termCheck}
              onPress={() => navigation.navigate('Dashboard')}>
              <LinearGradient
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.primaryGradient, Colors.secondaryGradient]}
                style={styles.gradient}>
                <Text style={styles.btnText}>Approve</Text>
              </LinearGradient>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
  },
  backText: {
    color: '#999999',
    fontSize: 12,
  },
  backIcon: { marginHorizontal: 10, marginTop: 2 },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    width: '50%',
    height: '100%',
  },
  mainContent: {
    flex: 1,

    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  secondaryText: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16,
    lineHeight: 24,
  },
  termCheckContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2%',

    marginHorizontal: '20%',
  },
  agreeText: {
    fontSize: 12,
    lineHeight: 18,
    marginLeft: '3%',
  },
  gradient: {
    width: '90%',
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  gradientText: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.primaryGradient,
  },
});

export default TermScreen;
