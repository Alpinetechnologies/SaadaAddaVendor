import React, { useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { Icon, Card } from 'react-native-elements';
import Colors from '../../../constants/Colors';

const OrdersScreen = ({ navigation }) => {
  const [restaurantStatus, setRestaurantStatus] = useState(true);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Saada Adda',
      headerTitleAlign: 'left',
    });
  }, [navigation, restaurantStatus]);

  const renderOrderItem = item => (
    <TouchableHighlight underlayColor={Colors.underlaylightColor} key={item.id}>
      <View style={styles.orderCardContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.itemDate}>{item.date}</Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.itemDay}>{item.day}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Card
            containerStyle={styles.item}
            image={item.image}
            imageProps={{ resizeMode: 'cover' }}
            imageStyle={styles.image}
            imageWrapperStyle={styles.imageContainer}
          />
          <View style={{ flex: 2 }}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <View>
                <TouchableOpacity>
                  <Text style={styles.trackText}>
                    {item.delivered ? '' : 'Track order'}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[
                    styles.orderStatusText,
                    {
                      backgroundColor: item.delivered ? '#21923A' : '#F0C222',
                    },
                  ]}>
                  {item.delivered ? 'Delivered' : 'In Progress'}
                </Text>
              </View>
            </View>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            <View style={styles.productsDetails}>
              <Text style={[styles.detailsText, { marginRight: 5 }]}>
                Quantity: {item.quantity}
              </Text>
              <View style={styles.smallLine} />
              <Text style={[styles.detailsText, { marginLeft: 5 }]}>
                Total Price: ₹{item.totalPrice}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderOrderList = item => (
    <View style={styles.container}>
      <Text style={styles.dateText}>{item.date}</Text>
      {item.orders.map(element => renderOrderItem(element))}
    </View>
  );

  const renderRestaurantClosedContent = () => (
    <>
      <View style={styles.mainContainer}>
        <Image
          style={styles.mainIconImage}
          resizeMode="contain"
          source={require('app/assests/images/shopclosed.png')}
        />
        <Text style={styles.closedText}>Restaurant{'\n'}is closed</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.onText}>
          Please turn on the restaurant from{'\n'}profile if you would like to
          start receiving orders
        </Text>

        <TouchableOpacity onPress={() => console.log('prifle')}>
          <Text style={styles.profileText}>Go to profile</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.iconRow}>
        <Icon
          name="scan1"
          type="antdesign"
          size={25}
          style={styles.icon}
          color="#999999"
        />
        <Icon
          name="search1"
          type="antdesign"
          size={25}
          style={styles.icon}
          color="#999999"
        />
      </View>
      {restaurantStatus ? (
        <FlatList
          data={orderList}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => renderOrderList(item)}
        />
      ) : (
        renderRestaurantClosedContent()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    overflow: 'hidden',
    paddingHorizontal: '3%',
  },
  iconRow: {
    marginVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginHorizontal: '2%',
  },
  mainContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
  },
  closedText: {
    marginTop: '5%',
    fontSize: 30,
    lineHeight: 32,
    textAlign: 'center',
  },
  mainIconImage: {
    width: 150,
    height: 150,
  },
  bottomContainer: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: '2%',
    alignItems: 'center',
  },
  onText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
  profileText: {
    fontSize: 21,
    lineHeight: 24,
    color: Colors.primaryGradient,
    marginTop: '5%',
    textDecorationLine: 'underline',
  },
  headerContainer: {
    backgroundColor: 'rgba(153, 153, 153, 0.2)',
    borderRadius: 12,
    left: '60%',
    width: 30,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onOffSwitch: {
    color: '#999999',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
  },
  orderCardContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    marginHorizontal: '3%',
    borderWidth: 2,
    width: 10,
    borderColor: 'rgba(153, 153, 153, 0.2)',
    textAlign: 'center',
  },
  itemDate: {
    fontSize: 18,
    lineHeight: 27,
  },
  itemDay: {
    fontSize: 10,
    lineHeight: 15,
  },
  cardImageContainer: {
    flex: 1,
    borderRadius: 5,
  },
  item: {
    flex: 1,
    height: 61,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  rightContainer: {
    flex: 2,
    paddingBottom: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 18,
  },
  subTitle: {
    fontSize: 8,
    lineHeight: 8,
    textTransform: 'uppercase',
    color: '#999999',
  },
  productsDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '2%',
  },
  titleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderStatusText: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: 'white',
    fontSize: 10,
    borderRadius: 16,
  },
  smallLine: {
    borderWidth: 1,
    borderColor: '#999999',
  },
  detailsText: {
    fontSize: 10,
    lineHeight: 15,
  },
  trackText: {
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    color: '#999999',
  },
});

export default OrdersScreen;

const orderList = [
  {
    id: 1,
    date: 'Jan 2020',
    orders: [
      {
        id: 1,
        date: '12',
        day: 'Thu',
        image: require('../../../assests/images/burger.jpg'),
        title: 'Burger',
        subTitle: 'Table No.3',
        quantity: 2,
        totalPrice: 200,
        delivered: false,
      },
      {
        id: 2,
        date: '09',
        day: 'Mon',
        image: require('../../../assests/images/burger.jpg'),
        title: 'Burger',
        subTitle: 'Table No.3',
        quantity: 2,
        totalPrice: 900,
        delivered: true,
      },
    ],
  },
  {
    id: 2,
    date: 'Dec 2019',
    orders: [
      {
        id: 1,
        date: '28',
        day: 'Fri',
        image: require('../../../assests/images/burger.jpg'),
        title: 'Burger',
        subTitle: 'Table No.3',
        quantity: 2,
        totalPrice: 200,
        delivered: true,
      },
      {
        id: 2,
        date: '20',
        day: 'Wed',
        image: require('../../../assests/images/burger.jpg'),
        title: 'Burger',
        subTitle: 'Table No.3',
        quantity: 2,
        totalPrice: 900,
        delivered: true,
      },
      {
        id: 3,
        date: '01',
        day: 'Sat',
        image: require('../../../assests/images/burger.jpg'),
        title: 'Burger',
        subTitle: 'Table No.3',
        quantity: 2,
        totalPrice: 900,
        delivered: true,
      },
    ],
  },
];
