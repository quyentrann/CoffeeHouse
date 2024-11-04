import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
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
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";

function HomeScreen() {
  const user = useSelector((state) => state.userInfo);

  const options = [
    {
      id: "1",
      label: "Giao hàng",
      imageSource: require("../src/assets/images/Delivery-2.ced14c9.png"),
    },
    {
      id: "2",
      label: "Mang đi",
      imageSource: require("../src/assets/images/Pickup-2.86cbc47.png"),
    },
    {
      id: "3",
      label: "Cà phê hạt rang",
      imageSource: require("../src/assets/images/Pickup-2.86cbc47.png"),
    },
    {
      id: "4",
      label: "Đổi Bean",
      imageSource: require("../src/assets/images/Pickup-2.86cbc47.png"),
    },
    {
      id: "5",
      label: "Đơn hàng",
      imageSource: require("../src/assets/images/comment.png"),
    },
    {
      id: "6",
      label: "Góp ý",
      imageSource: require("../src/assets/images/Pickup-2.86cbc47.png"),
    },
    {
      id: "7",
      label: "Hạng thành viên",
      imageSource: require("../src/assets/images/Pickup-2.86cbc47.png"),
    },
  ];

  const Banner = () => {
    const images = [
      require("../src/assets/images/banner3.png"),
      require("../src/assets/images/banner4a.jpg"),
      require("../src/assets/images/banner3a.jpg"),
      require("../src/assets/images/banner2.webp"),
      require("../src/assets/images/banner2a.jpg"),
    ];

    return (
      <Swiper
        showsButtons={true}
        autoplay
        autoplayTimeout={2}
        dotColor="#fff"
        activeDotColor="#b0b0b0"
        paginationStyle={{ marginBottom: -25 }}
      >
        {images.map((image, index) => (
          <View
            key={index}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={image}
              style={{ height: "100%", width: "100%", borderRadius: 12 }}
            />
          </View>
        ))}
      </Swiper>
    );
  };

  const IconButton = ({ imageSource, label }) => (
    <TouchableOpacity
      style={{ margin: 20, alignItems: "center", justifyContent: "center" }}
    >
      <Image source={imageSource} style={{ height: 50, width: 50 }} />
      <View style={{ height: 30, width: 70, marginTop: 6 }}>
        <Text style={{ textAlign: "center", fontSize:12, fontWeight:"bold" }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <View
        style={{
          height: 180,
          backgroundColor: "white",
          borderRadius: 12,
          marginVertical: 5,
        }}
      >
        <Banner />
      </View>
      <View
        style={{
          borderWidth: 1,
          height: 100,
          marginVertical: 17,
          backgroundColor: "white",
          borderRadius: 8,
          borderColor: "gray",
          overflow: "hidden",
        }}
      >
        <FlatList
          data={options}
          renderItem={({ item }) => (
            <IconButton imageSource={item.imageSource} label={item.label} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        />
      </View>
    </View>
  );
}

export default HomeScreen;
