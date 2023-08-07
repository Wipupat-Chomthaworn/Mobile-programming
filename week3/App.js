import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Example01() {
  const [text, setText] = useState("");
  const [textArray, setTextArray] = useState([]);
  const handleSave = () => { //function for save to array
    if (text.trim() !== "") {
      // Only add non-empty texts to the array
      setTextArray([...textArray, { stringData: text }]); //... mean add array by keep old value in array(not reset just add new one!)
      // { stringData: text } for lebel data as stringData not type just name
      setText(""); // Clear the input after saving
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 18 }}>Owen Notebook</Text>
      <TextInput
        placeholder="Write something here..."
        style={styles.input}
        value={text}
        onChangeText={(input) => {
          setText(input); //for change it textbox like v-moddel if not use it will show placholder
        }}
      />
      <Button title="Save" onPress={handleSave}/>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {textArray.map((item, index) => {
          return (
            // <View key={index}>
            //   <TouchableOpacity>
            //     <Image source={x.url} />
            //     <View style={styles.button}>
            //       <Text style={styles.hel}>{x.name}</Text>
            //       {x.name2 ? <Text style={styles.hel}>{x.name2}</Text> : ""}
            //     </View>
            //   </TouchableOpacity>
            // </View>
            <Text key={index}> {item.stringData} </Text>
          );
        })}
      </ScrollView>
    </SafeAreaView>
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
