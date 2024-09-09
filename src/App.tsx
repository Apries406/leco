import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AnalysisView, AssetsView, DetailView, UserView} from './views';
import {bottomTabsMenu} from './constants/tabs';

const Tab = createBottomTabNavigator();

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {bottomTabsMenu.map((item, index) => (
          <Tab.Screen name={item.label} component={item.screen} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
