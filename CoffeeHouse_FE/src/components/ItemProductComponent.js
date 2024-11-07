import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ItemProductComponent({product}) {
  return (
    <TouchableOpacity style={{}}>
            <View
              style={{
                height: 250,
                width: 195,
                justifyContent: 'space-around',
                marginVertical: 10, paddingHorizontal: 5
              }}>
              <View style={{  }}>
                <Image
                  source={{ uri: `http://localhost:8080/api${product.image}` }}
                  style={{ height: 160, width: 160, borderRadius: 12 }}
                />
              </View>
              <Text style={{ fontWeight: '500', fontSize: 17, width: 170 }}>
                {product.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 18, color: '#3d3d3d' }}>
                  {product.price}
                </Text>
                <TouchableOpacity>
                  <AntDesign
                    name="pluscircle"
                    size={29}
                    color="#C26005"
                    style={{ marginRight: 30, marginBottom: 5 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
  );
}
