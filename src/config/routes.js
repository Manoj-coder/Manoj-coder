import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Following from '../screens/Following/index';
import Order from '../screens/Order/index';
import Vlog from '../screens/Vlog/index';
import Shop from '../screens/Shop/index';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Shop'>
        <Stack.Screen
          name="Following"
          component={Following}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Vlog"
          component={Vlog}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shop"
          component={Shop}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
