import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import SingleUser from '../screens/SingleUser';
import UpdateUser from '../screens/UpdateUser';

import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();

const index = () => {
  const loginData = useSelector(state => state.state.loginData);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!loginData?.user_email ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SingleUser"
              component={SingleUser}
              // options={{headerShown: false}}
            />
            <Stack.Screen
              name="UpdateUser"
              component={UpdateUser}
              // options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
