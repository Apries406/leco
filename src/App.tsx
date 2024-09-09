import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AnalysisView, AssetsView, DetailView, UserView} from './views';

const Tab = createBottomTabNavigator();

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="明细" component={DetailView} />
        <Tab.Screen name="分析" component={AnalysisView} />
        <Tab.Screen name="资产" component={AssetsView} />
        <Tab.Screen name="我" component={UserView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
