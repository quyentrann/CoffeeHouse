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
  import ItemProductBagComponent from './ItemProductBagComponent';
  
  export default function ItemCategoryComponent({ category }) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.user.products);
  
    const listCategory = products.filter((value) => value.category === category);
  
    return (
      <FlatList
        data={listCategory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ItemProductBagComponent product={item} />
          );
        }}
      />
    );
  }
  