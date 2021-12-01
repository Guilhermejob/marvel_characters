import PageHome from '../views/PageHome';
import PageFavorites from '../views/PageFavorites';
import PageCharacter from '../views/PageCharacter';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home-outline' : 'home';
                  break;
                case 'Favorites':
                  iconName = focused ? 'star-outline' : 'star';
                  break;
                case 'Character':
                  iconName = focused
                    ? 'people-circle-outline'
                    : 'people-circle';
                  break;
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarOptions: {
              activeTintColor: '#800000',
              inactiveTintColor: 'white',
              activeBackgroundColor: 'black',
              inactiveBackgroundColor: 'gray',
            },
          })}
          initialRouteName="Home">
          <Tab.Screen name="Home" component={PageHome} />
          <Tab.Screen name="Favorites" component={PageFavorites} />
          <Tab.Screen name="Character" component={PageCharacter} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
