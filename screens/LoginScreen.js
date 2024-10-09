import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, Text, TextInput, View } from 'react-native';

function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require('../src/assets/images/login.jpg')}
          style={{ height: '100%', width: '100%' }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <View
          style={{ flex: 1.2, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              color: '#5c5c5c',
              fontSize: 15,
              fontWeight: '500',
              margin: 12,
            }}>
            Chào mừng bạn đến với
          </Text>
          <Image
            source={require('../src/assets/images/logo-black.44900f6.png')}
            style={{ height: 20, width: 270 }}
          />
        </View>
        <View
          style={{
            flex: 2.3,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#cc0808',
                  borderRadius: 50,
                  width: 19,
                  height: 19,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginLeft: 15,
                }}>
                <Entypo
                  name="star"
                  size={11.5}
                  color="yellow"
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 15,
                  marginLeft: 3,
                }}>
                +84
              </Text>
              <View
                style={{
                  borderWidth: 0.5,
                  height: 27,
                  marginLeft: 15,
                  borderColor: 'gray',
                }}
              />
            </View>
            <TextInput
              placeholder="Nhập số điện thoại"
              style={{
                height: 53,
                width: 340,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 100,
                fontSize: 16,
                color: 'gray',
                fontWeight: '400',
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                height: 48,
                width: 340,
                backgroundColor: '#b0b0b0',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text style={{ fontSize: 15, color: 'white', fontWeight: '350' }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: 20,
            }}>
            <View
              style={{
                borderWidth: 0.5,
                width: 138,
                height: 1,
                borderColor: '#adadad',
              }}
            />
            <Text
              style={{
                marginHorizontal: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#525252',
                fontSize:12
              }}>
              HOẶC
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                width: 138,
                height: 1,
                borderColor: '#adadad',
              }}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1.7,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#355fde',
                height: 50,
                width: 340,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  justifyContent:'center',
                  alignItems:'center',marginRight:190,
                  flexDirection:'row',position:'absolute'
                }}>
                <Text
                  style={{
                    color: '#355fde',
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingTop:5,
                    marginLeft:2
                  }}>
                  f
                </Text>
              </View>

              <Text style={{ color: 'white', fontWeight: '400', fontSize: 15 }}>
                Tiếp tục bằng Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                height: 50,
                width: 340,
                borderColor: 'gray',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
                <Image source={require('../src/assets/images/google.jpg')} style={{position:'absolute', marginRight:180}}/>
              <Text style={{ fontSize: 15.58 }}>Tiếp tục bằng Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;