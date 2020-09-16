import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <LinearGradient
      start={{ x: 0.4, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[Colors.primaryGradient, Colors.secondaryGradient]}
      style={styles.tabs}
      key={state.index}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              borderBottomWidth: isFocused ? 5 : 0,
              borderBottomColor: 'white',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <View
              style={{
                paddingTop: '10%',
                alignItems: 'center',
              }}>
              {label === 'Orders' && (
                <SimpleLineIcons name="handbag" color="white" size={15} />
              )}
              {label === 'Reports' && (
                <SimpleLineIcons name="graph" color="white" size={15} />
              )}
              {label === 'Inventory' && (
                <SimpleLineIcons name="menu" color="white" size={15} />
              )}
              {label === 'More' && (
                <SimpleLineIcons
                  name="options-vertical"
                  color="white"
                  size={15}
                />
              )}
              <Text
                style={{
                  color: 'white',
                  marginTop: 5,
                  fontSize: 12,
                  lineHeight: 21,
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  tabs: {
    height: 60,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
