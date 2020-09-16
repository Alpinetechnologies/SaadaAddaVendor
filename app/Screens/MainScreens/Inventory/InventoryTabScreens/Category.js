import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Switch } from 'react-native';
import Colors from '../../../../constants/Colors';

const Category = () => {
  const renderItemsList = (item, index) => (
    <View style={{ flex: 1, padding: '2%', marginTop: index === 0 ? '3%' : 0 }}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Switch thumbColor={Colors.primaryGradient} />
      </View>
      {item.items.map(element => {
        return (
          <View style={styles.foodElement}>
            <View style={styles.foodRow}>
              {element.type === 'veg' ? (
                <Image
                  source={require('../../../../assests/images/vegetarian.jpg')}
                  style={styles.image}
                />
              ) : (
                <Image
                  source={require('../../../../assests/images/nonveg.png')}
                  style={styles.image}
                />
              )}
              <View>
                <Text style={styles.name}>{element.name}</Text>
                <Text style={styles.price}>₹ {element.price}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );

  return (
    <View style={styles.screen}>
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Category;

const data = [
  {
    id: 1,
    title: 'Pasta',
    items: [
      {
        type: 'veg',
        name: 'Alfredo Penne Pasta',
        price: 450,
      },
      {
        type: 'veg',
        name: 'Alfredo Penne Pasta',
        price: 450,
      },
      {
        type: 'nonveg.png',
        name: 'Alfredo Penne Pasta',
        price: 450,
      },
    ],
  },
  {
    id: 2,
    title: 'Pasta',
    items: [
      {
        type: 'veg',
        name: 'Alfredo Penne Pasta',
        price: 450,
      },
      {
        type: 'veg',
        name: 'Alfredo Penne Pasta',
        price: 450,
      },
      {
        type: 'nonveg.png',
        name: 'Alfredo Penne Pasta',
        price: 450,
      },
    ],
  },
];
