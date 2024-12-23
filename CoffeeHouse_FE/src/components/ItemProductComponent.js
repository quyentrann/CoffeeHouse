import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../api/user";
import { setUser, startLoading, stopLoading } from "../../redux_toolkit/slice";

const basePath = process.env.EXPO_PUBLIC_API_KEY;
export default function ItemProductComponent({ product }) {
  const navigation = useNavigation();

  const user = useSelector((state) => state?.user?.userInfo);
  const dispatch = useDispatch();

  async function addToCart(userId, productId, quantity) {
    dispatch(startLoading());
    const rep = await addCart(userId, productId, quantity);
    dispatch(stopLoading());

    if (rep) {
      dispatch(setUser(rep));
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ItemProductDetailComponent", {
          product: product.id,
        });
      }}
    >
      <View
        style={{
          height: 250,
          width: 195,
          justifyContent: "space-around",
          marginVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        <View style={{}}>
          <Image
            source={{ uri: `${basePath}${product.image}` }}
            style={{ height: 160, width: 160, borderRadius: 12 }}
          />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 17, width: 170 }}>
          {product.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, color: "#3d3d3d" }}>
            {product.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
          <TouchableOpacity
            onPress={() => {
              addToCart(user.id, product.id, product.price);
            }}
          >
            <AntDesign
              name="pluscircle"
              size={29}
              color="#C26005"
              style={{ marginRight: 30, marginBottom: 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
