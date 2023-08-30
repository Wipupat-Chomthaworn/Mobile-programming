import React, { useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";


export default  function Lab31() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  return (
    <View style={styles.container}>

      {/* add text  here */}
      <Text style={{ fontSize: 18 }}>Example 01</Text>
      <TextInput
        placeholder="เพิ่มข้อความ"
        style={styles.input}
        value={text}
        onChangeText={(input) => {
          setText(input);
        }}
      />
      <Button
        title="เพิ่มข้อความ"
        onPress={() => { setArray([...array, text]) }}
      />

      {/* show text here */}
      <FlatList
        data={array}
        renderItem={({ item }) => (
          <View style={styles.outputcontainer}>
            <Text style={styles.outputtext}>{item}</Text>
          </View>
        )}
      />




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "70%",
    marginVertical: 10,
  },
  outputtext: {
    fontSize: 20,
  },
  btncontainer: {
    backgroundColor: "#d0efff",
    width: "70%",
  },
  outputcontainer: {
    marginVertical: 10,
  },
});
