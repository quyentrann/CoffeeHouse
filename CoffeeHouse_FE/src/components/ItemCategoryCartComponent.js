import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useEffect } from 'react';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import { useDispatch, useSelector } from 'react-redux';
  import ItemCartComponent from './ItemCartComponent';
  
  export default function ItemCategoryCartComponent() {
    const carts = useSelector((state) => state.user.userInfo.carts);
    console.log(carts);
    
    return (
      <FlatList
        data={carts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ItemCartComponent product={item} />
          );
        }}
      />
      
    );
  }
  