import React, { useState, useLayoutEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import Colors from '../../../constants/Colors';
import Items from './InventoryTabScreens/Items';
import Category from './InventoryTabScreens/Category';
import SubCategory from './InventoryTabScreens/SubCategory';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

const InventoryScreen = ({ navigation }) => {
  const menu = useRef();
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'items', title: 'Items' },
    { key: 'category', title: 'Category' },
    { key: 'subCategory', title: 'Sub-Category' },
  ]);
  const showMenu = () => menu.current.show();
  const hideMenu = () => menu.current.hide();
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableWithoutFeedback onPress={showMenu}>
  //         <View style={styles.menuButton}>
  //           <MaterialCommunityIcons
  //             name="silverware-fork-knife"
  //             color="white"
  //             size={20}
  //           />
  //           <Text style={styles.menuText}>Menu</Text>
  //         </View>
  //       </TouchableWithoutFeedback>
  //     ),
  //   });
  // }, [navigation]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'items':
        return <Items navigation={navigation} />;
      case 'category':
        return <Category navigation={navigation} />;
      case 'subCategory':
        return <SubCategory navigation={navigation} />;
      default:
        return null;
    }
  };
  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={Colors.primaryGradient}
      inactiveColor="#999999"
      tabStyle={{ flex: 1, backgroundColor: 'white' }}
      indicatorStyle={{ backgroundColor: 'black' }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 8 }}>{route.title}</Text>
      )}
    />
  );

  return (
    <View style={styles.screen}>
      {/* <Menu
        ref={menu}
        animationDuration={1000}
        style={{
          alignSelf: 'flex-end',
          // height: Dimensions.get('screen').height,
          // width: Dimensions.get('screen').width,
          // height: '100%',
          // width: '100%',
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: 'red',
          }}>
          <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={hideMenu} disabled>
            Menu item 3
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
        </View>
      </Menu> */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        lazy
      />
    </View>
  );
};

export default InventoryScreen;

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
  },
  tabTitle: {
    fontSize: 15,
  },
  menuButton: {
    backgroundColor: Colors.primaryGradient,
    width: 90,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '15%',
    alignItems: 'center',
    borderRadius: 20,
    right: '20%',
  },
  menuText: {
    fontSize: 14,
    lineHeight: 16,
    color: 'white',
  },
});
