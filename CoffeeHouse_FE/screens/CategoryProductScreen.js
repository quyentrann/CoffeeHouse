import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
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
import ItemCategoryComponent from '../src/components/ItemCategoryBagComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function CategoryProductScreen({ navigation, route }) {
  const [search, setSearch] = useState('');
  const products = useSelector((state) => state.user.products);
  const category = route.params.item;
  console.log(category.label);
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    findCategory(category.label);
  }, [category.label]);

  function findCategory(label) {
    if (label === 'Trà Xanh - Chocolate') {
      setListCategory(['Trà Xanh Tây Bắc', 'Chocolate']);
    }
    if (label === 'Cà Phê') {
      setListCategory([
        'Cà Phê Highlight',
        'Cà Phê Việt Nam',
        'Cà Phê Máy',
        'Cold Brew',
        'Cà phê tại nhà',
      ]);
    }
    if (label === 'Trái Cây Xay 0°C') {
      setListCategory(['Trái Cây Xay 0°C']);
    }
    if (label === 'Trà Trái Cây - HiTea') {
      setListCategory(['Trà trái cây', 'Hi-Tea Healthy']);
    }
    if (label === 'Trà Sữa') {
      setListCategory(['Trà Sữa']);
    }
    if (label === 'Thức Uống Đá Xay') {
      setListCategory(['Đá xay Frosty']);
    }
    if (label === 'Bánh & Snack') {
      setListCategory(['Bánh mặn', 'Bánh ngọt', 'Bánh Pastry']);
    }
  }
  console.log(listCategory);

  // useEffect(() => {
  //   if (search === '') {
  //     setRender(products);
  //   } else {
  //     const arr = products?.filter((value) =>
  //       value.name.toLowerCase().includes(search.toLowerCase())
  //     );
  //     // setRender(arr);
  //   }
  // }, [search]);

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 5 }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 320,
              justifyContent: 'center',
              backgroundColor: '#E3E3E3',
              borderRadius: 8,
            }}
            onPress={() => navigation.navigate('SearchScreen')}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <AntDesign name="search1" size={22} color="gray" />
              <Text
                style={{
                  paddingHorizontal: 20,
                  fontSize: 15,
                  color: 'gray',
                }}>
                Tìm kiếm
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.8 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#C25C12', fontSize: 17, fontWeight: '500' }}>
              Hủy
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={{ marginTop: 5 }}>
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: '#363636' }}>
              {category.label}
            </Text>
            <View style={{ marginTop: 10 }}>
              {listCategory.map((item, index) => (
                <View>
                  <Text
                    key={index}
                    style={{
                      marginRight: 10,
                      marginBottom: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      color: '#474747',
                      fontSize: 18,
                      fontWeight: '500',
                    }}>
                    {item}
                  </Text>
                  <ItemCategoryComponent category={item} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default CategoryProductScreen;
