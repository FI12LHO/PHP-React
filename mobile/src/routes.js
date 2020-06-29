import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './page/home/index';
import Detail from './page/detail/index';
import Search from './page/search/index';

function Routes() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{title: ''}} />
          <Stack.Screen name="Detail" component={Detail} options={{title: ''}} />
          <Stack.Screen name="Search" component={Search} options={{title: ''}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Routes