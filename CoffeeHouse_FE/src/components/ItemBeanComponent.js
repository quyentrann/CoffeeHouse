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
    <View style={{ borderRadius: 10 , margin: 10}}>
      <TouchableOpacity
        style={{
          marginVertical: 10,
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
              source={require('../assets/images/bean.png')}
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
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'space-between',
                paddingVertical: 8,
              }}>
              <Text style={{ fontWeight: '500', fontSize: 14 }}>
                Elsa Speak
              </Text>
              <Text style={{ fontSize: 14 }}>
                [ELSA SPEAK] giảm 275K gói Elsa Pro 1 năm
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 20,
                  width: 50,
                  backgroundColor: '#B4F5C3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginVertical: 3,
                }}>
                <Text style={{ color: '#156B2E' }}>99</Text>
              </View>
              <Text>BEAN</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
