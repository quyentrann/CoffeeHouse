import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ItemCategoryComponent() {
  return (
    <View style={{ borderRadius: 10, margin: 10 }}>
      <TouchableOpacity
        style={{
          marginVertical: 5,
          backgroundColor: 'white',
          height: 100,
          borderRadius: 8,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: 54,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/images/voucher.png')}
              style={{ height: 80, width: 80 }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              height: 100,
              borderColor: '#DEDEDE',
            }}
          />
          <View
            style={{
              flex: 2.3,
              justifyContent: 'space-between',
              paddingLeft: 15,
              paddingVertical: 10,
            }}>
            <Text>Combo Nước & Bánh Mì Que 49K + Freeship</Text>
            <Text>Hết hạn 30/11/2024</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
