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
  import { fetchProducts } from '../../redux_toolkit/productSlice';
  import ItemProductBagComponent from './ItemProductBagComponent';
  
  export default function ItemCategoryComponent({ category }) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.items);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const listCategory = products.filter((value) => value.category === category);
    console.log(listCategory);
  
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
  