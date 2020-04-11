import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from "./screens/Home";
import FavoriteScreen from "./screens/Favorite";
import Login from './screens/Login';
import { Ionicons } from '@expo/vector-icons';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
  } else if (routeName === 'Favorite') {
    iconName = `ios-heart`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const RootStack = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Favorite: { screen: FavoriteScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const MainStack = createSwitchNavigator(
  {
    Login: {screen: Login},
    Root: RootStack
  }
)

const AppContainer = createAppContainer(MainStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
