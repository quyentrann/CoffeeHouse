import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ItemProductComponent() {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          padding: 5,
          flexDirection: 'row',
          flex:1
        }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' , flex: 1, paddingVertical: 7}}>
          <Image
            source={require('../assets/images/item_product1.jpg')}
            style={{ height: 115, width: 115, borderRadius: 8 }}
          />
        </View>
        <View style={{ padding: 10, flex:2 }}>
          <Text style={{ fontWeight: '500', fontSize: 16, }}>
            Trà Xanh Latte Sữa Yến Mạch (Nóng)
          </Text>
          <Text style={{ fontSize: 16, color: '#3d3d3d' , paddingTop: 7}}>55.000đ</Text>
        </View>
          <View style={{justifyContent:'flex-end'}}>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={28} color="#dd6e06" />
          </TouchableOpacity>
          </View>
      </View>
    </TouchableOpacity>
  );
}
