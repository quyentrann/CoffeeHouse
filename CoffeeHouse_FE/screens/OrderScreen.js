import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
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

function OrderScreen({ navigation, route }) {
  const user = useSelector((state) => state.userInfo);
  const optionsSearch = [
    {
      id: 1,
      label: 'Trà Xanh - Chocolate',
      image: require('../src/assets/images/1.jpg'),
    },
    {
      id: 2,
      label: 'Cà Phê',
      image: require('../src/assets/images/62.jpg'),
    },
    {
      id: 3,
      label: 'Trái Cây Xay 0°C',
      image: require('../src/assets/images/44.jpg'),
    },
    {
      id: 4,
      label: 'Trà Trái Cây - HiTea',
      image: require('../src/assets/images/32.jpg'),
    },
    {
      id: 5,
      label: 'Trà Sữa',
      image: require('../src/assets/images/45.jpg'),
    },
    {
      id: 6,
      label: 'Thức Uống Đá Xay',
      image: require('../src/assets/images/67.jpg'),
    },
    {
      id: 7,
      label: 'Bánh & Snack',
      image: require('../src/assets/images/70.jpg'),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          padding: 10,
        }}>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <Entypo name="grid" size={24} color="#ed8758" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                paddingBottom: 3,
                paddingLeft: 10,
              }}>
              Danh mục
            </Text>
            <Entypo
              name="chevron-small-down"
              size={24}
              color="black"
              style={{ marginTop: 3 }}
            />
          </View>
        </TouchableOpacity>
        <View style={{justifyContent:'flex-end', flex:1, flexDirection:'row'}}>
        <View style={{ }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              borderRadius: 8,
            }}
            onPress={() => navigation.navigate('SearchScreen')}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <AntDesign name="search1" size={20} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              height: 42,
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              borderRadius: 8,
            }}
            onPress={() => navigation.navigate('FavoriteProductsScreen')}>
            <Ionicons name="heart-outline" size={22} color="gray" />
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
            backgroundColor: 'white',
            paddingTop: 15,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 250,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#9C9C9C',
              padding: 9,
            }}>
            <View style={{}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 379,
                  }}>
                  {optionsSearch.map((item) => (
                    <View
                      key={item.id}
                      style={{
                        width: 70,
                        marginHorizontal: 12,
                        marginVertical: 7,
                      }}>
                      <TouchableOpacity
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={item.image}
                          style={{ height: 60, width: 60, borderRadius: 50 }}
                        />
                        <Text
                          style={{
                            textAlign: 'center',
                            width: 75,
                            paddingTop: 2,
                            fontWeight: 500,
                          }}>
                          {item.label}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={{ marginVertical: 20 }}>
            <View>
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>
                Trà Xanh - Chocolate
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Trà Xanh Tây Bắc
              </Text>
              <ItemCategoryComponent category={'Trà Xanh Tây Bắc'} />
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Chocolate
              </Text>
              <ItemCategoryComponent category={'Chocolate'} />
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Cà Phê</Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Cà Phê Highlight
              </Text>
              <ItemCategoryComponent category={'Cà Phê Highlight'} />
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Cà Phê Việt Nam
              </Text>
              <ItemCategoryComponent category={'Cà Phê Việt Nam'} />
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Cà Phê Máy
              </Text>
              <ItemCategoryComponent category={'Cà Phê Máy'} />
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Cold Brew
              </Text>
              <ItemCategoryComponent category={'Cold Brew'} />
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Cà Phê Tại Nhà
              </Text>
              <ItemCategoryComponent category={'Cà phê tại nhà'} />
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>
                Trái Cây Xay 0°C
              </Text>
              <ItemCategoryComponent category={'Trái Cây Xay 0°C'} />
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>
                Trà Trái Cây - HiTea
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Trà Trái Cây
              </Text>
              <ItemCategoryComponent category={'Trà trái cây'} />
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Hi-Tea
              </Text>
              <ItemCategoryComponent category={'Hi-Tea Healthy'} />
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Trà Sữa</Text>
              <ItemCategoryComponent category={'Trà Sữa'} />
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>
                Thức Uống Đá Xay
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Đá xay Frosty
              </Text>
              <ItemCategoryComponent category={'Đá xay Frosty'} />
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>
                Bánh & Snack
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Bánh Mặn
              </Text>
              <ItemCategoryComponent category={'Bánh mặn'} />
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Bánh Ngọt
              </Text>
              <ItemCategoryComponent category={'Bánh ngọt'} />

              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: '#474747',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                Bánh Pastry
              </Text>
              <ItemCategoryComponent category={'Bánh Pastry'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default OrderScreen;
