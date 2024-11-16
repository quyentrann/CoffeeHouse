import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import React, { useState } from 'react';
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
import ItemCategoryCartComponent from '../src/components/ItemCategoryCartComponent';
import { Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen({ navigation, route }) {
  const [checked, setChecked] = React.useState(false);
  const [checkedAll, setCheckedAll] = useState(false);
  const products = useSelector((state)=> state.user.userInfo.carts)
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          padding: 10,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: 25,
              width: 25,
              borderRadius: 20,
            }}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '500',
              paddingBottom: 3,
              paddingLeft: 10,
            }}>
            Giỏ hàng
          </Text>
          <Text>({products.length})</Text>
        </View>
      </View>
      <View style={{ borderWidth: 0.2, borderColor: '#D1D1D1' }} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: 'white',
            paddingVertical:20
          }}>
            <ItemCategoryCartComponent/>
            
        </View>
      </ScrollView>
      <View style={{ borderWidth: 0.2, borderColor: '#D1D1D1' }} />
      <View style={{flexDirection:'row', alignItems:'center', height: 65, justifyContent:'space-between'}}>
     <View style={{flexDirection:'row', alignItems:'center', flex:1}}>
     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{fontSize: 16}}>Tất cả</Text>  
      </View>  
      <View style={{flexDirection:'row',  flex: 1.5}}>
        <Text style={{color:'red', fontSize: 19, fontWeight:'bold', margin: 10,}}>đ59.000</Text>
        <TouchableOpacity style={{height: 50, width: 130, borderRadius: 8, justifyContent:'center', alignItem:'center', backgroundColor:'#E57704'}}>
          <Text style={{textAlign:'center', color:'white', fontWeight:'500', fontSize: 17}}>Thanh toán (1)</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

export default CartScreen;
