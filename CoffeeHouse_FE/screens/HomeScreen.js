import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
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
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';

function HomeScreen({ navigation, route }) {
  const user = useSelector((state) => state.userInfo);

  const options = [
    {
      id: '1',
      label: 'Giao hàng',
      imageSource: require('../src/assets/images/Delivery-2.ced14c9.png'),
    },
    {
      id: '2',
      label: 'Mang đi',
      imageSource: require('../src/assets/images/Pickup-2.86cbc47.png'),
    },
    {
      id: '3',
      label: 'Cà phê hạt rang',
      imageSource: require('../src/assets/images/Pickup-2.86cbc47.png'),
    },
    {
      id: '4',
      label: 'Đổi Bean',
      imageSource: require('../src/assets/images/Pickup-2.86cbc47.png'),
    },
    {
      id: '5',
      label: 'Đơn hàng',
      imageSource: require('../src/assets/images/comment.png'),
    },
    {
      id: '6',
      label: 'Góp ý',
      imageSource: require('../src/assets/images/Pickup-2.86cbc47.png'),
    },
    {
      id: '7',
      label: 'Hạng thành viên',
      imageSource: require('../src/assets/images/Pickup-2.86cbc47.png'),
    },
  ];

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
      label: 'Đá Xay Frosty',
      image: require('../src/assets/images/67.jpg'),
    },

    {
      id: 7,
      label: 'Cà Phê Tại Nhà',
      image: require('../src/assets/images/83.jpg'),
    },
    {
      id: 8,
      label: 'Bánh Mặn',
      image: require('../src/assets/images/70.jpg'),
    },
    {
      id: 9,
      label: 'Bánh Ngọt',
      image: require('../src/assets/images/73.jpg'),
    },
    {
      id: 10,
      label: 'Bánh Pastry',
      image: require('../src/assets/images/80.jpg'),
    },
  ];

  const Banner = () => {
    const images = [
      require('../src/assets/images/banner3.png'),
      require('../src/assets/images/banner4a.jpg'),
      require('../src/assets/images/banner3a.jpg'),
      require('../src/assets/images/banner2.webp'),
      require('../src/assets/images/banner2a.jpg'),
    ];

    return (
      <Swiper
        showsButtons={true}
        autoplay
        autoplayTimeout={2}
        dotColor="#fff"
        activeDotColor="#b0b0b0"
        paginationStyle={{ marginBottom: -25 }}>
        {images.map((image, index) => (
          <View
            key={index}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={image}
              style={{ height: '100%', width: '100%', borderRadius: 12 }}
            />
          </View>
        ))}
      </Swiper>
    );
  };

  const IconButton = ({ imageSource, label }) => (
    <TouchableOpacity
      style={{ margin: 20, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={imageSource} style={{ height: 50, width: 50 }} />
      <View style={{ height: 30, width: 70, marginTop: 6 }}>
        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold' }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{ flex: 1, padding: 15 }}>
        <View
          style={{
            height: 180,
            backgroundColor: 'white',
            borderRadius: 12,
            marginVertical: 5,
          }}>
          <Banner />
        </View>
        <View
          style={{
            borderWidth: 1,
            height: 105,
            marginVertical: 17,
            backgroundColor: 'white',
            borderRadius: 8,
            borderColor: '#9C9C9C',
            overflow: 'hidden',
          }}>
          <FlatList
            data={options}
            renderItem={({ item }) => (
              <IconButton imageSource={item.imageSource} label={item.label} />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 290,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#9C9C9C',
            padding: 9,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{}}>
              <TouchableOpacity
                style={{
                  height: 42,
                  width: 290,
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
            <View style={{}}>
              <TouchableOpacity
                style={{
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  backgroundColor: '#FEF7E7',
                  borderRadius: 8,
                }}>
                <Ionicons name="heart-outline" size={24} color="#E07A0C" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{ flexDirection: 'row', flexWrap: 'wrap', width: 570 }}>
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
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
