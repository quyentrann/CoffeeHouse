import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailsScreen from '../../screens/LoginScreen';
import LoginScreen from '../../screens/LoginScreen';
import ForgotAccount from '../../screens/ForgotAccount';

const Stack = createNativeStackNavigator();

export function AppRouter() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

export default function Auth() {
  return(
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotAccount" component={ForgotAccount} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}