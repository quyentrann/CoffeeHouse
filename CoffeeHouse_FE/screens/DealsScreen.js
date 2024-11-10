import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function OthersScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ padding: 10, backgroundColor: '#F5F5F5' }}>
        <View style={{ height: 180, marginVertical: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              marginVertical: 8,
            }}>
            <TouchableOpacity style={{ width: '49%' }}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 8,
                  padding: 15,
                }}>
                <FontAwesome5 name="crown" size={24} color="#E9AB44" />
                <Text style={{ paddingVertical: 5, fontWeight: 450 }}>
                  Hạng thành viên
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '49%' }}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 8,
                  padding: 15,
                }}>
                <FontAwesome5 name="gift" size={24} color="#EF5435" />
                <Text style={{ paddingVertical: 5, fontWeight: 450 }}>
                  Đổi Bean
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              marginVertical: 8,
            }}>
            <TouchableOpacity style={{ width: '49%' }}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 8,
                  padding: 15,
                }}>
                <Fontisto name="history" size={24} color="#E17508" />
                <Text style={{ paddingVertical: 5, fontWeight: 450 }}>
                  Lịch sử BEAN
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '49%' }}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 8,
                  padding: 15,
                }}>
                <MaterialIcons name="security" size={24} color="#4297E7" />
                <Text style={{ paddingVertical: 5, fontWeight: 450 }}>
                  Quyền lợi của bạn
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginVertical: 5, height: 190, marginTop: 35 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
              Voucher của bạn
            </Text>
            <TouchableOpacity
              style={{
                height: 35,
                width: 100,
                backgroundColor: '#FFF6E8',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Text style={{ fontWeight: '500', color: '#DC7E0D' }}>
                Xem tất cả
              </Text>
            </TouchableOpacity>
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
                      source={require('../src/assets/images/voucher.png')}
                      style={{ height: 80, width: 80 }}
                    />
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      height: 100,
                      borderColor: '#DEDEDE',
                    }}
                  />
                  <View
                    style={{
                      flex: 2.3,
                      justifyContent: 'space-between',
                      paddingLeft: 15,
                      paddingVertical: 10,
                    }}>
                    <Text>Combo Nước & Bánh Mì Que 49K + Freeship</Text>
                    <Text>Hết hạn 30/11/2024</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
        </View>

        <View style={{height: 190, marginTop: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
              Đổi Bean
            </Text>
            <TouchableOpacity
              style={{
                height: 35,
                width: 100,
                backgroundColor: '#FFF6E8',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Text style={{ fontWeight: '500', color: '#DC7E0D' }}>
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
            <View style={{ borderRadius: 10 }}>
              <TouchableOpacity
                style={{
                  marginVertical: 10,
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
                      source={require('../src/assets/images/bean.png')}
                      style={{ height: 80, width: 80 }}
                    />
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      height: 100,
                      borderColor: '#DEDEDE',
                    }}
                  />
                  <View
                    style={{
                      flex: 2.3,
                      justifyContent: 'space-between',
                      paddingLeft: 15,
                      paddingVertical: 10, flexDirection:'row'
                    }}>
                    <View style={{ flex: 1.5 , justifyContent:'space-between', paddingVertical: 8}}>
                      <Text style={{ fontWeight: '500', fontSize: 14 }}>
                        Elsa Speak
                      </Text>
                      <Text style={{ fontSize: 14 }}>
                        [ELSA SPEAK] giảm 275K gói Elsa Pro 1 năm
                      </Text>
                    </View>
                    <View style={{ flex: 0.7, justifyContent:'center', alignItems:'center'}}>
                        <View style={{height: 20, width: 50, backgroundColor:'#B4F5C3', justifyContent:'center', alignItems:'center', borderRadius: 10, marginVertical: 3}}>
                            <Text style={{color:'#156B2E'}}>99</Text>
                        </View>
                        <Text>BEAN</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}
