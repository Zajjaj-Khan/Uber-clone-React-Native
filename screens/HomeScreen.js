import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import NavOption from "../components/NavOption";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea} className="bg-white h-full ">
      <View className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOption />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  safeArea: {
    marginTop: 30,
  },
});
