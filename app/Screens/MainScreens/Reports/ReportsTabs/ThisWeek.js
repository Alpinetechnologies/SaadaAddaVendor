import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Colors from '../../../../constants/Colors';
import { Card } from 'react-native-elements';

const Today = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.screen}>
        <Text style={styles.date}>May 09,Sat</Text>
        <View style={styles.firstContainer}>
          <Text style={styles.pinkText}>Top Insights</Text>
          <Card containerStyle={styles.greyCard}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={styles.foodReadyNum}>
                  0 / <Text style={styles.smallNum}>0</Text>
                </Text>
              </View>
              <View>
                <Text>Food ready good orders</Text>
              </View>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: '5%',
  },
  date: {
    alignSelf: 'flex-end',
  },
  firstContainer: {
    marginVertical: '3%',
    flex: 1,
  },
  pinkText: {
    color: Colors.primaryGradient,
    fontSize: 18,
  },
  greyCard: {
    marginVertical: '3%',
    backgroundColor: '#D3D3D3',
    // padding: '4%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },
  foodReadyNum: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
  },
  smallNum: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'normal',
  },
});

export default Today;
