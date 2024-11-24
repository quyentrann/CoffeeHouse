import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

function SignUpScreen({ navigation, route }) {
  const users = route.params.users;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function checkPhone(phone) {
    const newPhone = users.find((value) => value.phone === phone);
    return !!newPhone;
  }

  async function handleRegister(name, phone, password) {
    if (!name || !phone || !password || !confirmPassword) {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    setErrorMessage('');

    if (checkPhone(phone)) {
      setErrorMessage('Số điện thoại này đã được đăng ký');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu xác nhận không khớp!');
      return;
    }
    const newUser = { fullName: name, phone: phone, passWord: password };
    try {
      const response = await fetch('http://localhost:8080/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: name,
          phone: phone,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Đăng ký không thành công');
      }

      setErrorMessage('');
      Alert.alert('Thành công', 'Đăng ký thành công!');
      navigation.navigate('Login', { users });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 0.5 }}>
        <Image
          source={require('../src/assets/images/login.jpg')}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View style={{ flex: 2.5, paddingHorizontal: 20, paddingTop: 10 }}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 16, color: '#7d7d7d' }}>
            Chào mừng bạn đến với
          </Text>
          <Image
            source={require('../src/assets/images/logo-black.44900f6.png')}
            style={{
              height: 20,
              width: 270,
              marginVertical: 10,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Đăng ký tài khoản mới
        </Text>
        <TextInput
          placeholder="Nhập tên"
          style={{
            height: 50,
            width: '100%',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 15,
            marginBottom: 15,
            fontSize: 16,
            color: 'gray',
          }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Nhập số điện thoại"
          style={{
            height: 50,
            width: '100%',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 15,
            marginBottom: 15,
            fontSize: 16,
            color: 'gray',
          }}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />

        <TextInput
          placeholder="Mật khẩu"
          secureTextEntry
          style={{
            height: 50,
            width: '100%',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 15,
            marginBottom: 15,
            fontSize: 16,
            color: 'gray',
          }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder="Xác nhận mật khẩu"
          secureTextEntry
          style={{
            height: 50,
            width: '100%',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 15,
            marginBottom: 15,
            fontSize: 16,
            color: 'gray',
          }}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {errorMessage ? (
          <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity
          style={{
            height: 48,
            width: '100%',
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            marginTop: 10,
          }}
          onPress={() => handleRegister(name, phone, password)}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>
            Đăng ký
          </Text>
        </TouchableOpacity>

        <View style={{ display: 'flex', alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                marginTop: 15,
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
                paddingBottom: 15,
                color: 'blue',
              }}>
              Đã có tài khoản? Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignUpScreen;
