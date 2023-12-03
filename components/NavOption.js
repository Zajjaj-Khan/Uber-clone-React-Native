import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Order Food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];
const NavOption = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={()=>navigation.navigate(item.screen)}
        style={styles.touch}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon name="arrowright" color="white" type="antdesign" 
            className="p-2 bg-black rounded-full w-10 mt-4 "
            
            
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOption;
const styles = StyleSheet.create({
  touch: {
    padding: 8,
    paddingBottom: 32,
    paddingLeft:24,
    paddingTop: 16,
    backgroundColor: "#E8E8E8",
    margin: 8,
    width: 160,
  },
});
