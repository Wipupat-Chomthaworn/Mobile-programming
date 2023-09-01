import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";

const App = () => {
  const buttons = [
    { title: "PROGRAMS", link: "" },
    { title: "ABOUT US", link: "" },
  ];
  return (
    <>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.imgs}
          source={require("../static/IT_Logo.png")}
        ></Image>

        <Text>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text>สถานบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((items) => {
          return <Button title={items.title} />;
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgs: {
    width: 120,
    height: 120,
  },
  buttons: {
    // backgroundColor: "red",
    justifyContent: "flex-end",
    rowGap: 20,
    margin: 20,
  },

});

export default App;
