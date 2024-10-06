import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        padding: 15,
      }}>
      <View
        style={{
          height: 190,
          backgroundColor: 'white',
          borderRadius: 12,
          marginVertical: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 25,
            paddingVertical: 10,
            flex: 1.5,
            justifyContent: 'space-around',
          }}>
          <Text style={{ fontSize: 22, fontWeight: '700' }}>Đăng nhập</Text>
          <Text
            style={{ textAlign: 'center', fontSize: 15, fontWeight: '500' }}>
            Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành cho thành viên
            bạn nhé!
          </Text>
          <TouchableOpacity
            style={{
              height: 35,
              width: 130,
              backgroundColor: '#f55c36',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
            }}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              The cofee House's Reward
            </Text>
            <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          height: 130,
          marginVertical: 22,
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
          <TouchableOpacity style={{ margin: 20 , alignItems:'center', justifyContent:'center'}}>
            <Image
              source={require('../src/assets/images/Delivery-2.ced14c9.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{height:30, width:70, marginTop:6}}>
            <Text style={{ textAlign: 'center' }}>Giao hàng</Text>
            </View>
           
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 20, justifyContent:'center', alignItems:'center' }}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
             <View style={{height:30, width:70, marginTop:6}}>
             <Text style={{ textAlign: 'center' }}>Mang đi</Text>
            </View>
            
          </TouchableOpacity>

          <TouchableOpacity style={{ margin: 20, alignItems:'center', justifyContent:'center' }}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{height:30, width:70, marginTop:10}}>
            <Text style={{ textAlign: 'center' }}>Cà phê hạt rang</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 20 , alignItems:'center', justifyContent:'center'}}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
             <View style={{height:30, width:70, marginTop:6}}>
             <Text style={{ textAlign: 'center' }}>Đổi Bean</Text>
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 20 , justifyContent:'center', alignItems:'center'}}>
            <Image
              source={require('../src/assets/images/comment.png')}
              style={{ height: 60, width: 60 }}
            />
             <View style={{height:30, width:70, marginTop:6}}>
             <Text style={{ textAlign: 'center' }}>Đơn hàng</Text>
            </View>
           
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 20 , alignItems:'center', justifyContent:'center'}}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
             <View style={{height:30, width:70, marginTop:6}}>
             <Text style={{ textAlign: 'center' }}>Góp ý</Text>
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 20 , alignItems:'center', justifyContent:'center'}}>
            <Image
              source={require('../src/assets/images/Pickup-2.86cbc47.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{height:30, width:70, marginTop:6}}>
            <Text style={{ textAlign: 'center' }}>Hạng thành viên</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;
