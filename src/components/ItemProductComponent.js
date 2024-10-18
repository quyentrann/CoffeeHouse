import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ItemProductComponent() {
  return (
    <TouchableOpacity style={{margin: 5}}>
      <View
      style={{
        height: 280,
        width: 200,
        justifyContent: 'space-between',
        padding: 15,
      }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../assets/images/item_product1.jpg')}
          style={{ height: 165, width: 165, borderRadius: 12 }}
        />
      </View>
      <Text style={{ fontWeight: '500', fontSize: 16 }}>
        Trà Xanh Latte Sữa Yến Mạch (Nóng)
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: '#3d3d3d' }}>55.000đ</Text>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={26} color="#f9861b" />
        </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  );
}
