import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Zocial from '@expo/vector-icons/Zocial';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';

const basePath = process.env.EXPO_PUBLIC_API_KEY;
export default function ItemCartComponent({ product }) {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = React.useState(false);

  function changeQuantity(status) {
    if (status === 'increase') {
      setQuantity(quantity + 1);
    } else if (status === 'reduce' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <TouchableOpacity>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          padding: 1,
          flexDirection: 'row',
          flex: 1,
        }}>
        <View style={{ justifyContent: 'center' }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            paddingBottom: 7,
          }}>
          <Image
            source={{ uri: `${basePath}${product.product.image}` }}
            style={{ height: 80, width: 80, borderRadius: 7 }}
          />
        </View>
        <View style={{ padding: 15, flex: 2, justifyContent: 'space-around' }}>
          <Text style={{ fontWeight: '500', fontSize: 16 }}>
            {product.product.name}
          </Text>
          <Text style={{ fontSize: 16, paddingTop: 7 }}>
            {product.product.price} đ
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 0.8,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                height: 25,
                width: 25,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FDF2DE',
                borderRadius: 20,
                opacity: quantity === 1 ? 0.5 : 1,
              }}
              onPress={() => changeQuantity('reduce')}>
              <AntDesign name="minus" size={15} color="#B57031" />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, padding: 5 }}>{quantity}</Text>
            <TouchableOpacity
              style={{
                height: 25,
                width: 25,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FDF2DE',
                borderRadius: 20,
              }}
              onPress={() => changeQuantity('increase')}>
              <Ionicons name="add" size={15} color="#B57031" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
