import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';

function HomeScreen({ route }) {
  const user = route.params?.user;
  console.log(user);

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
        style={{ flex: 1 }}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={2}>
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

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red',
        padding: 15,
      }}>
     
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
          height: 130,
          marginVertical: 17,
          backgroundColor: 'white',
          borderRadius: 12,
          borderColor: 'gray',
          overflow: 'hidden',
        }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../src/assets/images/Delivery-2.ced14c9.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{ height: 30, width: 70, marginTop: 6 }}>
              <Text style={{ textAlign: 'center' }}>Giao hàng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{ height: 30, width: 70, marginTop: 6 }}>
              <Text style={{ textAlign: 'center' }}>Mang đi</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{ height: 30, width: 70, marginTop: 10 }}>
              <Text style={{ textAlign: 'center' }}>Cà phê hạt rang</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{ height: 30, width: 70, marginTop: 6 }}>
              <Text style={{ textAlign: 'center' }}>Đổi Bean</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../src/assets/images/comment.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{ height: 30, width: 70, marginTop: 6 }}>
              <Text style={{ textAlign: 'center' }}>Đơn hàng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{ height: 30, width: 70, marginTop: 6 }}>
              <Text style={{ textAlign: 'center' }}>Góp ý</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{ height: 30, width: 70, marginTop: 6 }}>
              <Text style={{ textAlign: 'center' }}>Hạng thành viên</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;
