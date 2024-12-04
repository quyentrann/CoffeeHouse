import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function OthersScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <View style={{ height: 223, marginVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tiện ích</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
              marginVertical: 8,
            }}
          >
            <TouchableOpacity
              style={{ width: "49%" }}
              onPress={() => navigation.navigate("OrderHistoryScreen")}
            >
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  padding: 15,
                }}
              >
                <AntDesign name="filetext1" size={24} color="#DF7422" />
                <Text style={{ paddingVertical: 5, fontWeight: 450 }}>
                  Lịch sử đơn hàng
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "49%" }}>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  padding: 15,
                }}
              >
                <FontAwesome6 name="file-shield" size={24} color="#2D3391" />
                <Text style={{ paddingVertical: 5, fontWeight: 450 }}>
                  Điều khoản
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ height: "42%" }}>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                padding: 15,
              }}
            >
              <FontAwesome6 name="file-shield" size={24} color="#2D3391" />
              <Text style={{ paddingVertical: 5, fontWeight: 450 }}>
                Điều khoản VNPAY
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 5, height: 190 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            Hỗ trợ
          </Text>
          <View
            style={{
              flex: 1,
              height: "100%",
              borderRadius: 8,
            }}
          >
            <View style={{ borderTopStartRadius: 8, borderTopEndRadius: 8 }}>
              <TouchableOpacity
                style={{
                  marginTop: 1,
                  backgroundColor: "white",
                }}
                onPress={() => navigation.navigate("HistoryOrder")}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 54,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 54,
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      paddingHorizontal: 10,
                      flex: 1,
                    }}
                  >
                    <AntDesign name="inbox" size={26} color="black" />
                    <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>
                      Lịch sử mua hàng
                    </Text>
                  </View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ marginTop: 1, backgroundColor: "white" }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 54,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 54,
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    paddingHorizontal: 10,
                    flex: 1,
                  }}
                >
                  <MaterialCommunityIcons
                    name="message-outline"
                    size={24}
                    color="black"
                  />

                  <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>
                    Liên hệ góp ý
                  </Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <View style={{ borderEndStartRadius: 8, borderEndEndRadius: 8 }}>
              <TouchableOpacity
                style={{
                  marginTop: 1,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 54,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 54,
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      paddingHorizontal: 10,
                      flex: 1,
                    }}
                  >
                    <MaterialIcons
                      name="library-books"
                      size={24}
                      color="black"
                    />
                    <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>
                      Đánh giá đơn hàng
                    </Text>
                  </View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 25, height: 244, marginBottom: 100 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            Tài khoản
          </Text>
          <View
            style={{
              flex: 1,
              height: "100%",
              borderRadius: 8,
            }}
          >
            <View style={{ borderTopStartRadius: 8, borderTopEndRadius: 8 }}>
              <TouchableOpacity
                style={{
                  marginTop: 1,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 54,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 54,
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      paddingHorizontal: 10,
                      flex: 1,
                    }}
                  >
                    <AntDesign name="user" size={24} color="black" />
                    <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>
                      Thông tin cá nhân
                    </Text>
                  </View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ marginTop: 1, backgroundColor: "white" }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 54,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 54,
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    paddingHorizontal: 10,
                    flex: 1,
                  }}
                >
                  <Feather name="bookmark" size={24} color="black" />

                  <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>
                    Địa chỉ đã lưu
                  </Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 1,
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 54,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 54,
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    paddingHorizontal: 10,
                    flex: 1,
                  }}
                >
                  <Ionicons name="settings-outline" size={24} color="black" />
                  <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>
                    Cài đặt
                  </Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <View style={{ borderEndStartRadius: 8, borderEndEndRadius: 8 }}>
              <TouchableOpacity
                style={{
                  marginTop: 1,
                  backgroundColor: "white",
                }}
                onPress={() => navigation.navigate("Login")}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 54,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 54,
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      paddingHorizontal: 10,
                      flex: 1,
                    }}
                  >
                    <SimpleLineIcons name="logout" size={24} color="black" />
                    <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>
                      Đăng xuất
                    </Text>
                  </View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
