import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";

// Import images
const IT_Logo = require("../static/IT_Logo.png");
const images = [
  { src: require("../static/1.jpg"), name: "Information Technology" },
  { src: require("../static/2.jpg"), name: "Software Development" },
  { src: require("../static/3.jpg"), name: "Data Science" },
  { src: require("../static/4.jpg"), name: "Web Development" },
];

export default  function Lab32(){
  return (
    <>
      <View style={styles.header}>
        <Image resizeMode="contain" style={styles.img} source={IT_Logo} />
        <Text style={{ fontSize: 40 }}>Programs</Text>
      </View>
      {/* <View style={styles.container}>
        {images.map((item, index) => (
          <TouchableOpacity>
            <View key={index}>
              <Image resizeMode="contain" source={item.src} style={{ width: 300, height: 200 }} />
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View> */}

      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image resizeMode="contain" source={item.src} style={{ width: 300, height: 200 }} />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "black",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "blue",
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 70,
    width: 70,
  },
});
