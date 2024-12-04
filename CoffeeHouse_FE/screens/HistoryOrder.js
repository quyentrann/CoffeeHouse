import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import ItemProductBagComponent from "../src/components/ItemProductBagComponent";
import { v4 as uuid } from "uuid";

function HistoryOrder({ navigation }) {
  const order = useSelector((state) => state.user.userInfo.orders);

  const [productHistory, setProductHistory] = useState([]);
  const dispatch = useDispatch();

  const getAllProducts = (order) => {
    return order
      .map((order) => order.orderDetails) // Lấy orderDetails từ mỗi đơn hàng
      .flat() // Làm phẳng tất cả các orderDetails thành một mảng duy nhất
      .map((detail) => detail.product);
  };

  useEffect(() => {
    setProductHistory(getAllProducts(order));
  }, [order]);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{ flexDirection: "row", height: 50, alignItems: "center" }}
        >
          <View style={{ flex: 0.1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="chevron-small-left" size={37} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", flex: 1, marginRight: 5 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                paddingBottom: 3,
              }}
            >
              Lịch sử mua hàng
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 0.2, borderColor: "#D1D1D1" }} />
        <View style={{ backgroundColor: "white" }}>
          {productHistory?.length === 0 ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 630,
              }}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "#C9C9C9",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 40,
                }}
              >
                <FontAwesome name="star" size={35} color="white" />
              </View>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: "bold",
                  paddingTop: 28,
                  color: "#4A4A4A",
                }}
              >
                Bạn chưa có lịch sử mua hàng
              </Text>
            </View>
          ) : (
            <FlatList
              data={productHistory}
              keyExtractor={(item) => uuid()}
              renderItem={({ item }) => {
                return <ItemProductBagComponent product={item} />;
              }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

export default HistoryOrder;
