import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Platform,
  FlatList,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../../../constants/Colors';

const Items = () => {
  const [searchValue, setSearchValue] = useState('');

  const renderItemsList = (item, index) => (
    <View
      style={{ flex: 1, padding: '2%', marginTop: index === 0 ? '3%' : 0 }}
      key={item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      {item.items.map(element => {
        return (
          <View style={styles.foodElement} key={element.name}>
            <View style={styles.foodRow}>
              {element.type === 'veg' ? (
                <Image
                  source={require('../../../../assests/images/vegetarian.jpg')}
                  style={styles.image}
                />
              ) : (
                <Image
                  source={require('../../../../assests/images/vegetarian.jpg')}
                  style={styles.image}
                />
              )}
              <View>
                <Text style={styles.name}>{element.name}</Text>
                <Text style={styles.price}>₹ {element.price}</Text>
              </View>
            </View>
            <Switch thumbColor={Colors.primaryGradient} trackColor="#999999" />
          </View>
        );
      })}
    </View>
  );
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Icon
          type={Platform.OS === 'android' ? 'materialicons' : 'ionicons'}
          name={Platform.OS === 'android' ? 'search' : 'ios-search'}
          size={25}
          color="#999999"
          style={styles.inputLogo}
        />
        <TextInput
          value={searchValue}
          onChangeText={value => setSearchValue(value)}
          placeholder="Search your items..."
          style={[styles.input]}
        />
      </View>

      <FlatList
        data={data}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => renderItemsList(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 30,
    height: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  inputLogo: {
    marginLeft: 10,
  },
  input: {
    color: '#999999',
    flex: 1,
  },
  itemTitle: {
    fontSize: 22,
    lineHeight: 26,
    color: Colors.primaryGradient,
  },
  image: {
    width: 15,
    height: 15,
  },
  foodRow: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 14,
    lineHeight: 17,
    marginLeft: '5%',
  },
  foodElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '3%',
    paddingVertical: '2%',
  },
  price: {
    marginLeft: '5%',
    marginTop: '3%',
  },
});
export default Items;

const data = [
  {
    id: 1,
    title: 'Pasta',
    items: [
      { id: 1, type: 'veg', name: 'Alfredo Penne Pasta', price: 450 },
      {
        type: 'veg',
        name: 'Alfredo Penne Pasta',
        price: 450,
      },
      { id: 2, type: 'nonveg', name: 'Alfredo Penne Pasta', price: 450 },
    ],
  },
  {
    id: 2,
    title: 'Pasta',
    items: [
      { id: 1, type: 'veg', name: 'Alfredo Penne Pasta', price: 450 },
      { id: 2, type: 'veg', name: 'Alfredo Penne Pasta', price: 450 },
      { id: 3, type: 'nonveg', name: 'Alfredo Penne Pasta', price: 450 },
    ],
  },
];
