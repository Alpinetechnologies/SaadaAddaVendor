import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import Colors from '../../../constants/Colors';
import Custom from './ReportsTabs/Custom';
import Today from './ReportsTabs/Today';
import ThisWeek from './ReportsTabs/ThisWeek';
import ThisMonth from './ReportsTabs/ThisMonth';

const ReportsScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'today', title: 'Today' },
    { key: 'thisweek', title: 'This Week' },
    { key: 'thismonth', title: 'This Month' },
    { key: 'custom', title: 'Custom' },
  ]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Business Reports',
      headerTitleAlign: 'left',
    });
  }, [navigation]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'today':
        return <Today navigation={navigation} />;
      case 'thisweek':
        return <ThisWeek navigation={navigation} />;
      case 'thismonth':
        return <ThisMonth navigation={navigation} />;
      case 'custom':
        return <Custom navigation={navigation} />;
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
      indicatorStyle={{ backgroundColor: Colors.primaryGradient }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, fontSize: 14 }}>{route.title}</Text>
      )}
    />
  );

  return (
    <View style={styles.screen}>
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
});

export default ReportsScreen;
