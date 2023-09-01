import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

// Import images
const IT_Logo = require("../static/IT_Logo.png");
const images = [
  { src: require("../static/1.jpg"), name: "Information Technology" },
  { src: require("../static/2.jpg"), name: "Software Development" },
  { src: require("../static/3.jpg"), name: "Data Science" },
  { src: require("../static/4.jpg"), name: "Web Development" },
];

export default function App() {
  return (
    <View style={styles.bodys}>
      <View style={styles.header}>
        <Image resizeMode="contain" style={styles.img} source={IT_Logo} />
        <Text style={{ fontSize: 40 }}>Programs</Text>
      </View>
      <View >
        <ScrollView>

          {images.map((item, index) => (
            <TouchableOpacity>
              <View key={index}>
                <Image resizeMode="contain" source={item.src} style={{ width: 300, height: 200 }} />
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}

        </ScrollView>
      </View>
    </View>
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
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  img: {
    height: 70,
    width: 70,
  },
  bodys: {
    flexDirection: "column",
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  }
});
