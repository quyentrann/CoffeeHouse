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
    <ScrollView>
      <View style={{ padding: 12 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              placeholder="Tìm kiếm"
              style={{
                height: 42,
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
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{ color: '#C25C12', fontSize: 16, fontWeight: '500' }}>
                Hủy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={render}
          renderItem={({ item }) => <ItemProductBagComponent product={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}

export default SearchScreen;
