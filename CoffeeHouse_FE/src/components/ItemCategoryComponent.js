import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import ItemProductComponent from "./ItemProductComponent";

export default function ItemCategoryComponent({ category }) {
  const products = useSelector((state) => state.user.products);
  
  return (
    <FlatList
      data={products?.filter((value) => value.category == category)}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => {
        return <ItemProductComponent product={item} />;
      }}
    />
  );
}
