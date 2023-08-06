import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.IT_Image}
          source={require("../Week2/picture/IT_Logo.png")}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          คณะเทคโนโลยีสารสนเทศ
        </Text>
        <Text> สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง </Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnWrapper}>
          <Button title="Programs" />
        </View>
        <View style={styles.btnWrapper}>
          <Button title="About us" />
        </View>
      </View>
      <StatusBar style="auto" />
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
  logoContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10, // Add some margin at the bottom for better visual appearance
  },
  IT_Image: {
    width: 120,
    height: 120,
    margin: 20,
  },
  btnWrapper: {
    width:300,
    marginVertical: 10,
  },
});
