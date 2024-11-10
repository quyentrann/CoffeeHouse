import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function FavoriteProductsScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{backgroundColor:'white'}}>
        <View
          style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
          <View style={{ flex: 0.1 }}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
              <Entypo name="chevron-small-left" size={37} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flex: 1, marginRight: 5 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                paddingBottom: 3,
              }}>
              Sản phẩm Yêu Thích
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 0.2, borderColor: '#D1D1D1' }} />
        <View style={{justifyContent:'center', alignItems:'center', height: 630}}>
          <View
            style={{
              height: 70,
              width:70,
              backgroundColor: '#C9C9C9',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
            }}>
            <FontAwesome name="star" size={35} color="white" />
          </View>
          <Text style={{ fontSize: 19, fontWeight: 'bold' , paddingTop: 28, color:'#4A4A4A'}}>
            Bạn chưa có sản phẩm yêu thích
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default FavoriteProductsScreen;
