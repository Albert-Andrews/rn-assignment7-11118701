import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const Details = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.icon} source={require("../assets/Menu.png")} />
          </TouchableOpacity>

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Open</Text>
            <Text style={styles.headerTextSub}>Fashion</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image
                style={styles.icon}
                source={require("../assets/icons8-search.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart", { cartItems })}
            >
              <Image
                style={styles.icon}
                source={require("../assets/shopping-bag.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
       

      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  headerTextContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerTextSub: {
    fontSize: 24,
    fontWeight: "300",
    marginLeft: 4,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
