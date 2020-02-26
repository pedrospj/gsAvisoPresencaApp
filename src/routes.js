import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, SuccessScreen } from './pages/index';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Routes = () => {
  const { token } = useSelector(state => state.auth);

  return (
    <Stack.Navigator>
      {token ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Success"
            component={SuccessScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routes;
