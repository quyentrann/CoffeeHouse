import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailsScreen from '../../screens/LoginScreen';
import LoginScreen from '../../screens/LoginScreen';
import ForgotAccount from '../../screens/ForgotAccountScreen';
import SignUp from '../../screens/SignUpScreen';
import { Provider } from 'react-redux';
import store from '../../redux_toolkit/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import OthersScreen from '../../screens/OthersScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#DF7422',
        tabBarInactiveTintColor: 'black',
        tabBarStyle:{
          height: 65, paddingBottom:10, paddingTop: 10
        }
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="home"
              size={22}
              color={color} 
            />
          ),
          tabBarLabel: 'Trang chủ',
          tabBarLabelStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Tab.Screen
        name="orders"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({color}) => (<Feather name="coffee" size={22} color={color} />),
          tabBarLabel: 'Đặt hàng',
          tabBarLabelStyle: {
            fontWeight: '500',
          },
        }}
      />
          <Tab.Screen
        name="Store"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({color}) => (<Ionicons name="storefront-outline" size={22} color={color} />),
          tabBarLabel: 'Cửa hàng',
          tabBarLabelStyle: {
            fontWeight: '500',
          },
        }}
      />
         <Tab.Screen
        name="Voucher"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name="ticket-percent-outline" size={22} color={color} />),
          tabBarLabel: 'Ưu đãi',
          tabBarLabelStyle: {
            fontWeight: '500',
          },
        }}
      />
          <Tab.Screen
        name="Khác"
        component={OthersScreen}
        options={{
          tabBarIcon: ({color}) => (<Entypo name="menu" size={22} color={color} />),
          tabBarLabel: 'Khác',
          tabBarLabelStyle: {
            fontWeight: '500',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function Auth() {
  return (
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotAccount" component={ForgotAccount} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={TabScreen} />
      </Stack.Navigator>
    </Provider>
  );
}
