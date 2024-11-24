import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import Foundation from '@expo/vector-icons/Foundation';
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

function OrderHistoryScreen({ navigation }) {
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
              Lịch sử đơn hàng
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 0.2, borderColor: '#D1D1D1' }} />
        <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 10}}>
            <View style={{}}>
            <TouchableOpacity style={{height: 35, width: 120, backgroundColor:'#ffe5d9', justifyContent:'center', alignItems:'center', borderRadius: 17}}>
                <Text style={{color:'#b83a00'}}>Đang thực hiện</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 15}}>
            <TouchableOpacity style={{height: 35, width: 100,  justifyContent:'center', alignItems:'center', borderRadius: 17}}>
                <Text style={{color:'black'}}>Đã hoàn tất</Text>
            </TouchableOpacity>
            </View>
            <View style={{}}>
            <TouchableOpacity style={{height: 35, width: 70, justifyContent:'center', alignItems:'center', borderRadius: 17}}>
                <Text style={{color:'black'}}>Đã hủy</Text>
            </TouchableOpacity>
            </View>
            
        </View>
        <View style={{justifyContent:'center', alignItems:'center', height: 580}}>
          <View
            style={{
              height: 70,
              width:70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
            }}>
         <AntDesign name="filetext1" size={60} color="gray" />
          </View>
          <Text style={{ fontSize: 18 , paddingTop: 23, color:'#4A4A4A'}}>
            Chưa có đơn hàng nào đang thực hiện
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default OrderHistoryScreen;
