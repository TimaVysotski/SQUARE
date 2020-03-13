import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import Home from '../screens/Home';
import StackNavigationRoutes from '../types/navigation';

const Stack = createStackNavigator();

const AppNavigator = (): ReactElement => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={StackNavigationRoutes.HOME} component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
