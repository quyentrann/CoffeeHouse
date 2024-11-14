import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const basePath = process.env.EXPO_PUBLIC_API_KEY
export default function ItemProductBagComponent({product}) {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          padding: 1,
          flexDirection: 'row',
          flex:1
        }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' , flex: 1, paddingVertical: 7, marginLeft: 16}}>
          <Image
            source={{ uri: `${basePath}${product.image}` }}
            style={{ height: 120, width: 120, borderRadius: 7 }}
          />
        </View>
        <View style={{ padding: 15, flex:2 , marginLeft: 10}}>
          <Text style={{ fontWeight: '500', fontSize: 16, }}>
            {product.name}
          </Text>
          <Text style={{ fontSize: 16, paddingTop: 7}}>{product.price} đ</Text>
        </View>
          <View style={{justifyContent:'flex-end'}}>
          <TouchableOpacity style={{paddingBottom: 10, paddingRight: 5}}>
            <AntDesign name="pluscircle" size={30} color="#C26005" />
          </TouchableOpacity>
          </View>
      </View>
    </TouchableOpacity>
  );
}
