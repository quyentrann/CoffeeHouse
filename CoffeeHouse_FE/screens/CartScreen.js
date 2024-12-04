import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useCallback, useEffect, useState } from "react";
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
import ItemCategoryCartComponent from "../src/components/ItemCategoryCartComponent";
import { Checkbox } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import ItemCartComponent from "../src/components/ItemCartComponent";
import { setUser, startLoading, stopLoading } from "../redux_toolkit/slice";
import { deleteCart, order } from "../api/product";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function CartScreen({ navigation, route }) {
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const products = useSelector((state) => state.user.userInfo.carts);
  const [productCart, setProductCart] = useState(
    products.map((item) => ({
      isSelected: false,
      productId: item.product.id,
      quantity: 1,
    }))
  );

  useEffect(() => {
    const newCart = products.map((item) => ({
      isSelected: false,
      productId: item.product.id,
      quantity: 1,
    }));

    setProductCart(newCart);
  }, [user]);

  const updateCart = useCallback((productId, quantity, selected) => {
    const newProductCart = [...productCart];
    const index = newProductCart.findIndex(
      (item) => item.productId === productId
    );
    if (index !== -1) {
      newProductCart[index].quantity = quantity;
      newProductCart[index].isSelected = selected;
      console.log(newProductCart);

      setProductCart(newProductCart);
    }
  });

  const onCheckAll = () => {
    const newProductCart = [...productCart];
    newProductCart.forEach((item) => (item.isSelected = !checked));
    console.log(newProductCart);

    setProductCart(newProductCart);
    setChecked(!checked);
  };
  // Assuming you have a list of product prices available somewhere in your app
  const getProductPrice = (productId) => {
    // Implement this to fetch the price based on the productId
    const product = products.find((item) => item.product.id === productId);
    return product ? product.product.price : 0; // assuming price is in item.product.price
  };

  // Calculate total price of selected products
  const calculateTotal = () => {
    return productCart.reduce((total, cartItem) => {
      if (cartItem.isSelected) {
        const price = getProductPrice(cartItem.productId);
        total += price * cartItem.quantity;
      }
      return total;
    }, 0);
  };

  const onOrder = async () => {
    const orderdetail = productCart
      .filter((item) => item.isSelected === true)
      .map((item) => ({
        product: {
          id: item.productId,
        },
        quantity: item.quantity,
        price: getProductPrice(item.productId) * item.quantity,
      }));
    if (orderdetail.length > 0) {
      dispatch(startLoading());
      const rep = await order(orderdetail, user.id);
      dispatch(stopLoading());

      if (rep) {
        dispatch(setUser(rep));
      }
    }
  };

  const onDeleteCart = async () => {
    const productIds = productCart
      .filter((item) => item.isSelected === true)
      .map((item) => item.productId);

    if (productIds.length > 0) {
      dispatch(startLoading());
      const rep = await deleteCart(productIds, user.id);
      dispatch(stopLoading());
      if (rep) {
        dispatch(setUser(rep));
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: 25,
              borderRadius: 20,
            }}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "500",
                paddingBottom: 3,
                paddingLeft: 10,
                color: "black",
              }}
            >
              Giỏ hàng ({products.length})
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              marginLeft: 5,
              marginRight: 5,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}
            onPress={() => {
              onDeleteCart();
            }}
          >
            <MaterialIcons name="delete-forever" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ borderWidth: 0.2, borderColor: "#D1D1D1" }} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: "white",
            paddingVertical: 20,
          }}
        >
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ItemCartComponent
                  product={item}
                  update={updateCart}
                  checkedAll={checked}
                />
              );
            }}
          />
        </View>
      </ScrollView>
      <View style={{ borderWidth: 0.2, borderColor: "#D1D1D1" }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 65,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              onCheckAll();
            }}
          />
          <Text style={{ fontSize: 16 }}>Tất cả</Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1.5 }}>
          <Text
            style={{
              color: "red",
              fontSize: 19,
              fontWeight: "bold",
              margin: 10,
            }}
          >
            {Number(calculateTotal()).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: 130,
              borderRadius: 8,
              justifyContent: "center",
              alignItem: "center",
              backgroundColor: "#E57704",
            }}
            onPress={() => {
              onOrder();
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 17,
              }}
            >
              Thanh toán{" "}
              {productCart.filter((item) => item.isSelected === true).length}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CartScreen;
