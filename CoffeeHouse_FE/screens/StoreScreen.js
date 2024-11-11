import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
import { useSelector } from 'react-redux';
import ItemCategoryComponent from '../src/components/ItemCategoryBagComponent';

function StoreScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          padding: 10,
          backgroundColor: 'white',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              paddingBottom: 3,
              paddingLeft: 10,
              fontWeight: 'bold',
            }}>
            Cửa hàng
          </Text>
        </View>
        <View
          style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#EBEBEB',
                width: 55,
                height: 30,
                borderRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <MaterialCommunityIcons
                  name="ticket-percent-outline"
                  size={20}
                  color="#D27D2D"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity
              style={{
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                width: 30,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#EBEBEB',
                margin: 5,
              }}>
              <Ionicons name="notifications-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ borderWidth: 0.2, borderColor: '#D1D1D1' }} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingTop: 15,
          }}>
          <View style={{ height: 190 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                Cửa hàng gần bạn
              </Text>
            </View>

            <View style={{ borderRadius: 10 }}>
              <TouchableOpacity
                style={{
                  marginVertical: 5,
                  backgroundColor: 'white',
                  height: 100,
                  borderRadius: 8,
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: 54,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../src/assets/images/store1.jpeg')}
                      style={{ height: 80, width: 80, borderRadius: 8 }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2.3,
                      justifyContent: 'space-between',
                      paddingLeft: 5,
                      paddingVertical: 17,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: '500',
                          color: '#2B2B2B',
                        }}>
                        THE COFEE HOUSE
                      </Text>
                      <Text>HCM Cao Thắng</Text>
                    </View>
                    <Text>Cách đây 0.01 km</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 190 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                Cửa hàng khác
              </Text>
            </View>

            <View style={{ borderRadius: 10 }}>
              <TouchableOpacity
                style={{
                  marginVertical: 5,
                  backgroundColor: 'white',
                  height: 100,
                  borderRadius: 8,
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: 54,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../src/assets/images/store2.jpg')}
                      style={{ height: 80, width: 80, borderRadius: 8 }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2.3,
                      justifyContent: 'space-between',
                      paddingLeft: 5,
                      paddingVertical: 17,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: '500',
                          color: '#2B2B2B',
                        }}>
                        THE COFEE HOUSE
                      </Text>
                      <Text>HCM Cao Thắng 2</Text>
                    </View>
                    <Text>Cách đây 0.07 km</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default StoreScreen;
