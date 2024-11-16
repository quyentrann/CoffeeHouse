import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
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
import SearchScreen from '../../screens/SearchScreen';
import OrderScreen from '../../screens/OrderScreen';
import FavoriteProductsScreen from '../../screens/FavoriteProductsScreen';
import DealScreen from '../../screens/DealsScreen';
import OrderHistoryScreen from '../../screens/OrderHistoryScreen';
import StoreScreen from '../../screens/StoreScreen';
import ItemProductDetailComponent from '../components/ItemProductDetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../../screens/CartScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#DF7422',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={22} color={color} />
          ),
          tabBarLabel: 'Trang chủ',
          tabBarLabelStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Tab.Screen
        name="orders"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="coffee" size={22} color={color} />
          ),
          tabBarLabel: 'Đặt hàng',
          tabBarLabelStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="storefront-outline" size={22} color={color} />
          ),
          tabBarLabel: 'Cửa hàng',
          tabBarLabelStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Tab.Screen
        name="Voucher"
        component={DealScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              size={22}
              color={color}
            />
          ),
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
          tabBarIcon: ({ color }) => (
            <Entypo name="menu" size={22} color={color} />
          ),
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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotAccount" component={ForgotAccount} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={TabScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen
            name="FavoriteProductsScreen"
            component={FavoriteProductsScreen}
          />
          <Stack.Screen
            name="OrderHistoryScreen"
            component={OrderHistoryScreen}
          />
          <Stack.Screen
            name="ItemProductDetailComponent"
            component={ItemProductDetailComponent}
          />
          <Stack.Screen name='CartScreen' component={CartScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
