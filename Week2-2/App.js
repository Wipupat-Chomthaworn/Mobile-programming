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
        <View style={styles.header}>
        <Image 
          style={styles.logo}
          source={require('../Week2-2/picture/IT_Logo.png')}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 40, color: 'blue', fontWeight: 'bold' }}>Programs</Text>
      </View>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
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
  header: {
    width:"100%",
    height:100,
    backgroundColor:'#AAD9E6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // paddingTop: 50, // You can adjust this value to add spacing at the top of the header
    // backgroundColor: "white", // You can set the desired background color for the header
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo:{
    width:60,
    height:60,

  },
});
