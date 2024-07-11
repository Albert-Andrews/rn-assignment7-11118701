import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import React from "react";

const Details = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Image source={{ uri: item.image }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
