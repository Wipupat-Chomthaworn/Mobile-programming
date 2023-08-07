import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const courseList = [
  {
    url: require("../week3-2/picture/course-bach-ait.jpg"),
    name: "Artificial Intelligent Technology",
  },
  {
    url: require("../week3-2/picture/course-bach-bit.jpg"),
    name: "Business Information Technology",
    name2: "(International Programs)",
  },
  {
    url: require("../week3-2/picture/course-bach-dsba.jpg"),
    name: "Data Science and Business Analytics",
  },
  {
    url: require("../week3-2/picture/course-bach-it.jpg"),
    name: "Information Technology",
  },
];

export default function App() {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image source={item.url} />
        <View style={styles.button}>
          <Text style={styles.hel}>{item.name}</Text>
          {item.name2 ? <Text style={styles.hel}>{item.name2}</Text> : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../week3-2/picture/IT_Logo.png")}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 40, color: "blue", fontWeight: "bold" }}>
          Programs
        </Text>
      </View>
      <FlatList
        data={courseList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#AAD9E6",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
  logo: {
    width: 60,
    height: 60,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  hel: {
    fontSize: 20,
  },
});
