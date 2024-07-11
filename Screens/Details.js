import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const Details = ({ navigation, route }) => {
  const { item } = route.params || {}; // Destructure item from route.params

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
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image
                style={styles.icon}
                source={require("../assets/shopping-bag.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Render the item details */}
        <View style={styles.detailsContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.productImage} source={{ uri: item?.image }} />
          </View>

          <Text>{item?.title}</Text>
          <Text>{item?.category}</Text>
          <Text>{item?.description}</Text>
          <Text style={styles.itemPrice}>${item?.price}</Text>
          <View>
            <Text>Do not use bleach</Text>
            <Text>Do not tumble dry</Text>
            <Text>Dry clean with tetrachloroethylene</Text>
            <Text>Iron at a maximum of 110oC/230oF</Text>
          </View>
          <View style={styles.hr} />
          <View>
            
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
  productImage: {
    width: 200,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 20,
  },
  detailsContainer: {
    justifyContent: "center",
    alignItems: "start",
    gap: 20,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
  },
  hr: {
    borderBottomWidth: 1,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderColor: "gray",
  },
  itemPrice: {
    color: "red",
  },
});
