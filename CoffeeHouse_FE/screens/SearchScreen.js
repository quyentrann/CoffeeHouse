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
import ItemProductBagComponent from '../src/components/ItemProductBagComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function SearchScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const products = useSelector((state) => state.user.products);

  const [render, setRender] = useState(products);

  useEffect(() => {
    if (search === '') {
      setRender(products);
    } else {
      const arr = products?.filter((value) =>
        value.name.toLowerCase().includes(search.toLowerCase())
      );
      setRender(arr);
    }
  }, [search]);

  return (
    <View style={{ flex: 1 , padding:15}}>
      <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' , flex: 5}}>
              <TextInput
                placeholder="Tìm kiếm"
                style={{
                  height: 40,
                  width: 320,
                  justifyContent: 'center',
                  backgroundColor: '#D4D4D4',
                  borderRadius: 8,
                  paddingLeft: 40,
                  color: 'gray',
                  fontSize: 15,
                }}
                value={search}
                onChangeText={(text) => setSearch(text)}
              />
              <AntDesign
                name="search1"
                size={22}
                color="gray"
                style={{ position: 'absolute', paddingLeft: 5 }}
              />
            </View>
            <View style={{flex:0.8}}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text
                  style={{ color: '#C25C12', fontSize: 17, fontWeight: '500' }}>
                  Hủy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          
      <ScrollView>
        <View style={{ marginTop: 5}}>
          
          <FlatList
            data={render}
            renderItem={({ item }) => (
              <ItemProductBagComponent product={item} />
            )}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="always"
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default SearchScreen;
