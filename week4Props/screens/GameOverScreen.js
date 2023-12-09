import React from "react";
import { View, StyleSheet, Text, Button, Image,} from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      {/* ...เพิ่มโค้ด สรุปผลลัพธ์การเล่นเกม และมีปุ่มให้เริ่มเกมใหม่ได้... */}
      {/* <Button title="Play Again" onPress={()=> props.navigation.navigate("Game")} /> */}
      {/* <Image source={require("../hallis.jpg")} resizeMode="contain" style={{width:25, height:30}}/> */}
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>Number was: {props.correctNumber}</Text>
      <Button title="Play Again" onPress={props.resetGamefunc} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
