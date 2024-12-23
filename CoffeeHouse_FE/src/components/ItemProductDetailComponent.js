import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "@mui/material";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector, useDispatch } from "react-redux";
import Zocial from "@expo/vector-icons/Zocial";
import { RadioButton } from "react-native-paper";
import { addCart, addFavorite, deleteFavorite } from "../../api/user";
import { setUser, startLoading, stopLoading } from "../../redux_toolkit/slice";

const basePath = process.env.EXPO_PUBLIC_API_KEY;
export default function ItemProductDetailComponent({ route }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.userInfo);
  const products = useSelector((state) => state.user.products);
  const product = products.find((value) => value.id === route.params.product);
  const [checked, setChecked] = React.useState("Vừa");
  const [price, setPrice] = useState(product?.price);
  const dispatch = useDispatch();

  const ProductDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = description.length > 100;
    return (
      <View>
        <Text
          numberOfLines={isExpanded ? 0 : 2}
          ellipsizeMode="tail"
          style={{ fontSize: 16 }}
        >
          {description}
        </Text>
        {isLongText && (
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={{ color: "blue", marginTop: 5, color: "#B35D03" }}>
              {isExpanded ? "Thu gọn" : "...Xem thêm"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  function getSize(name) {
    const size = product?.sizes?.find((value) => value.name === name);
    return size ? size.price : 0;
  }

  function changeQuantity(status) {
    if (status === "increase") {
      setQuantity(quantity + 1);
    } else if (status === "reduce" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  useEffect(() => {
    if (product?.sizes && product.sizes.length > 0) {
      const initialSize = product.sizes[0].name;
      setPrice(getSize(initialSize));
    }
  }, [product]);

  async function addToCart(userId, productId, quantity) {
    dispatch(startLoading());
    const rep = await addCart(userId, productId, quantity);
    dispatch(stopLoading());

    if (rep) {
      dispatch(setUser(rep));
    }
  }

  useEffect(() => {
    const like = !!user.favorites.find(
      (item) => item.product.id === product.id
    );
    setIsFavorite(like);
  }, [user.favorites, product]);

  const handleFavoriteToggle = async () => {
    try {
      let updatedUser;
      dispatch(startLoading());
      if (isFavorite) {
        updatedUser = await deleteFavorite(user.id, product.id);
      } else {
        updatedUser = await addFavorite(user.id, product.id);
      }
      dispatch(stopLoading());
      dispatch(setUser(updatedUser));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Lỗi khi cập nhật yêu thích:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          // position: 'absolute',
          backgroundColor: "white",
          width: "100%",
          top: 0,
          alignItems: "center",
          height: 50,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, marginRight: 260 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: 30,
              width: 30,
              borderRadius: 20,
            }}
          >
            <Ionicons name="arrow-back-outline" size={26} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              borderRadius: 20,
            }}
            onPress={() => navigation.navigate("CartScreen")}
          >
            <Badge badgeContent={user?.carts?.length} color="primary">
              <AntDesign name="shoppingcart" size={27} color="black" />
            </Badge>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#D1D1D1",
          backgroundColor: "white",
        }}
      />
      <ScrollView
        style={{ backgroundColor: "#c6c6c6" }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ backgroundColor: "white" }}>
          <Image
            source={{ uri: `${basePath}${product.image}` }}
            style={{ height: 320, width: "100%" }}
          />
          <View style={{ flexDirection: "row", padding: 15, flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "space-around" }}>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                {product.name}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  paddingVertical: 10,
                }}
              >
                {Number(price).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </Text>

              <ProductDescription description={product.description} />
            </View>
            <View style={{ flex: 0.1 }}>
              <TouchableOpacity
                onPress={handleFavoriteToggle}
                style={{
                  padding: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="heart"
                  size={24}
                  color={isFavorite ? "red" : "black"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 9,
            backgroundColor: "white",
            padding: 15,
            height: 230,
          }}
        >
          <View style={{}}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Size<Text style={{ color: "red" }}>*</Text>
            </Text>
            <Text style={{ fontSize: 16, paddingTop: 5, color: "#707070" }}>
              Chọn 1 loại size
            </Text>
          </View>
          <RadioButton.Group
            onValueChange={(value) => {
              setChecked(value);
              const newPrice = getSize(value);
              setPrice(newPrice);
            }}
            value={checked}
          >
            <View
              style={{
                height: 175,
                justifyContent: "space-around",
                paddingVertical: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => setChecked("Lớn")}
                >
                  <RadioButton
                    value="Lớn"
                    status={checked === "Lớn" ? "checked" : "unchecked"}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      paddingLeft: 10,
                    }}
                  >
                    Lớn
                  </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 17 }}>
                  {getSize("Lớn").toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Text>
              </View>

              <View style={{ borderWidth: 0.2, borderColor: "#F0F0F0" }} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => setChecked("Vừa")}
                >
                  <RadioButton
                    value="Vừa"
                    status={checked === "Vừa" ? "checked" : "unchecked"}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      paddingLeft: 10,
                    }}
                  >
                    Vừa
                  </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 17 }}>
                  {getSize("Vừa").toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Text>
              </View>

              <View style={{ borderWidth: 0.5, borderColor: "#F0F0F0" }} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => setChecked("Nhỏ")}
                >
                  <RadioButton
                    value="Nhỏ"
                    status={checked === "Nhỏ" ? "checked" : "unchecked"}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      paddingLeft: 10,
                    }}
                  >
                    Nhỏ
                  </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 17 }}>
                  {getSize("Nhỏ").toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <View
          style={{
            marginTop: 9,
            backgroundColor: "white",
            padding: 15,
            height: 140,
            marginBottom: 20,
          }}
        >
          <View style={{}}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Yêu cầu khác
            </Text>
            <Text style={{ fontSize: 16, paddingTop: 5, color: "#707070" }}>
              Những tùy chọn khác
            </Text>
          </View>
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <TextInput
              placeholder="Thêm ghi chú"
              style={{
                height: 50,
                width: 340,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#919191",
                paddingLeft: 12,
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 60,
          backgroundColor: "white",
          paddingHorizontal: 12,
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              flex: 0.8,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                height: 35,
                width: 35,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FDF2DE",
                borderRadius: 20,
                opacity: quantity === 1 ? 0.5 : 1,
              }}
              onPress={() => changeQuantity("reduce")}
            >
              <AntDesign name="minus" size={22} color="#B57031" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>{quantity}</Text>
            <TouchableOpacity
              style={{
                height: 35,
                width: 35,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FDF2DE",
                borderRadius: 20,
              }}
              onPress={() => changeQuantity("increase")}
            >
              <Ionicons name="add" size={22} color="#B57031" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 2,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                height: 45,
                borderRadius: 12,
                justifyContent: "center",
                backgroundColor: "#E57704",
                width: 200,
                alignItems: "center",
              }}
            >
              {/* <Text style={{color:'white', fontSize: 14}}>Mua ngay</Text> */}
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  alignItems: "center",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                {(price * quantity).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 35,
                width: 35,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
              }}
              onPress={() => {
                addToCart(user.id, product.id, price * quantity);
              }}
            >
              <Zocial name="cart" size={24} color="#AD5A03" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
