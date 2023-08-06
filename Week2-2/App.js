import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
const picture = [
  {
    url: require("../Week2-2/picture/course-bach-ait.jpg"),
    name: "Artificial Intellegent Techonology",
  },
  {
    url: require("../Week2-2/picture/course-bach-bit.jpg"),
    name: "Bussiness Information Techonology",
    name2: "(International Programs)",
  },
  {
    url: require("../Week2-2/picture/course-bach-dsba.jpg"),
    name: "Data Science and Bussiness Analytics",
  },
  {
    url: require("../Week2-2/picture/course-bach-it.jpg"),
    name: "Information Techonology",
  },
];
export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {picture.map((x, index) => {
          return (
            <View key={index}>
              <TouchableOpacity>
                <Image source={x.url} />
                <View style={styles.button}>
                  <Text style={styles.hel}>{x.name}</Text>
                  {x.name2 ? <Text style={styles.hel}>{x.name2}</Text> : ""}
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
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
});
