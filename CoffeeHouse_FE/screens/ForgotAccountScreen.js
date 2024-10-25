import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

export default function ForgotAccount({ navigation, route }) {
  const users = route.params.users; 
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false); 

  function checkPhoneExists(phone) {
    const user = users.find((user) => user.phone === phone);
    return !!user; 
  }

  function handleCheckPhone() {
    if (!phone) {
      setErrorMessage("Vui lòng nhập số điện thoại!");
      return;
    }

    if (!checkPhoneExists(phone)) {
      setErrorMessage("Số điện thoại không tồn tại trong hệ thống.");
      return;
    }

    setErrorMessage("");
    setShowPasswordForm(true); 
  }

  function handleResetPassword() {
    if (!password || !confirmPassword) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu xác nhận không khớp!");
      return;
    }

    setErrorMessage("");
    navigation.navigate("Login"); 
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "600", textAlign: "center", marginBottom: 20 }}>
        Khôi phục tài khoản
      </Text>

      {!showPasswordForm && (
        <>
          <TextInput
            placeholder="Nhập số điện thoại"
            style={{
              height: 50,
              borderColor: "#ddd",
              borderWidth: 1,
              borderRadius: 15,
              paddingLeft: 15,
              marginBottom: 15,
              fontSize: 16,
              color: "gray",
            }}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />

          {errorMessage ? (
            <Text style={{ color: "red", marginBottom: 10 }}>{errorMessage}</Text>
          ) : null}

          <TouchableOpacity
            style={{
              height: 48,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              marginTop: 10,
            }}
            onPress={handleCheckPhone}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "500" }}>
              Kiểm tra số điện thoại
            </Text>
          </TouchableOpacity>
        </>
      )}

      {showPasswordForm && (
        <>
          <TextInput
            placeholder="Nhập mật khẩu mới"
            secureTextEntry
            style={{
              height: 50,
              borderColor: "#ddd",
              borderWidth: 1,
              borderRadius: 15,
              paddingLeft: 15,
              marginBottom: 15,
              fontSize: 16,
              color: "gray",
            }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TextInput
            placeholder="Xác nhận mật khẩu mới"
            secureTextEntry
            style={{
              height: 50,
              borderColor: "#ddd",
              borderWidth: 1,
              borderRadius: 15,
              paddingLeft: 15,
              marginBottom: 15,
              fontSize: 16,
              color: "gray",
            }}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />

          {errorMessage ? (
            <Text style={{ color: "red", marginBottom: 10 }}>{errorMessage}</Text>
          ) : null}

          <TouchableOpacity
            style={{
              height: 48,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              marginTop: 10,
            }}
            onPress={handleResetPassword}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "500" }}>
              Đặt lại mật khẩu
            </Text>
          </TouchableOpacity>
        </>
      )}

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontSize: 16, color: "blue" }}>Quay lại đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
