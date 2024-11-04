import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function ItemProductComponent() {
  return (
    <ScrollView
      style={{ backgroundColor: '#c6c6c6' }}
      contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={{ backgroundColor: 'white' }}>
        <Image
          source={require('../assets/images/item_product1.jpg')}
          style={{ height: 350, width: '100%' }}
        />
        <View style={{ flexDirection: 'row', padding: 15, flex: 1 }}>
          <View
            style={{ flex: 1, height: 150, justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              Trà Xanh Latte Sữa Yến Mạch
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '500' }}> 59.000đ</Text>
            <Text>
              Vị matcha êm mượt nhờ kết hợp với sữa yến mạch.{'\n'} *Khuấy đề để
              thưởng trọn hương vị
            </Text>
          </View>
          <View style={{ flex: 0.1 }}>
            <TouchableOpacity>
              <FontAwesome5 name="heart" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 9,
          backgroundColor: 'white',
          padding: 15,
          height: 230,
        }}>
        <View style={{}}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
            Size<Text style={{ color: 'red' }}>*</Text>
          </Text>
          <Text style={{ fontSize: 16, paddingTop: 5, color: '#707070' }}>
            Chọn 1 loại size
          </Text>
        </View>
        <View
          style={{
            height: 175,
            justifyContent: 'space-around',
            paddingVertical: 20,
          }}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderWidth: 2,
                    borderRadius: 15,
                  }}
                />
                <Text
                  style={{ fontSize: 19, fontWeight: '500', paddingLeft: 10 }}>
                  Lớn
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>65.000đ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 0.5, borderColor: '#cccbc9' }} />
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderWidth: 2,
                    borderRadius: 15,
                  }}
                />
                <Text
                  style={{ fontSize: 19, fontWeight: '500', paddingLeft: 10 }}>
                  Vừa
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>65.000đ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 0.5, borderColor: '#cccbc9' }} />
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderWidth: 2,
                    borderRadius: 15,
                  }}
                />
                <Text
                  style={{ fontSize: 19, fontWeight: '500', paddingLeft: 10 }}>
                  Nhỏ
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>65.000đ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 9,
          backgroundColor: 'white',
          padding: 15,
          height: 525,
        }}>
        <View style={{}}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Topping</Text>
          <Text style={{ fontSize: 16, paddingTop: 5, color: '#707070' }}>
            Chọn tối đa 2 loại
          </Text>
        </View>
        <View
          style={{
            height: 460,
            justifyContent: 'space-around',
            paddingVertical: 20,
          }}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 2,
                  }}
                />
                <Text
                  style={{ fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>
                  Kem Phô Mai Macchiato
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>10.000đ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 0.5, borderColor: '#cccbc9' }} />
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 2,
                  }}
                />
                <Text
                  style={{ fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>
                 Trái Vải
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>10.000đ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 0.5, borderColor: '#cccbc9' }} />{' '}
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 2,
                  }}
                />
                <Text
                  style={{ fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>
                 Hạt Sen
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>10.000đ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 0.5, borderColor: '#cccbc9' }} />{' '}
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 2,
                  }}
                />
                <Text
                  style={{ fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>
                  Đào miếng
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>10.000đ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 0.5, borderColor: '#cccbc9' }} />{' '}
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 2,
                  }}
                />
                <Text
                  style={{ fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>
                  Thạch Cà Phê
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>10.000đ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 0.5, borderColor: '#cccbc9' }} />{' '}
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 2,
                  }}
                />
                <Text
                  style={{ fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>
                  Sốt Caramel
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>10.000đ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 0.5, borderColor: '#cccbc9' }} />{' '}
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 2,
                  }}
                />
                <Text
                  style={{ fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>
                  Trân Châu Trắng
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>10.000đ</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 0.5, borderColor: '#cccbc9' }} />{' '}
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 2,
                  }}
                />
                <Text
                  style={{ fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>
                  Shot Espresso
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>10.000đ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View   style={{
          marginTop: 9,
          backgroundColor: 'white',
          padding: 15,
          height: 140,
        }}>
        <View style={{}}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Yêu cầu khác</Text>
          <Text style={{ fontSize: 16, paddingTop: 5, color: '#707070' }}>
            Những tùy chọn khác
          </Text>
        </View>
        <View style={{marginVertical:10, alignItems:'center'}}>
            <TextInput placeholder='Thêm ghi chú' style={{height: 50, width: 340, borderWidth:1, borderRadius:12, borderColor:'#898988', paddingLeft: 12}}/>
        </View>
      </View>
    </ScrollView>
    
  );
}
