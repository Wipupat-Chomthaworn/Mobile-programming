// import React, { Component } from "react";
import React, { useState } from "react"; // Import useState
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";
// add Student screen
function AddStudent({ navigation }) {
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [gpa, setgpa] = useState("");

  const storeStudents = () => {
    firebase
      .firestore()
      .collection("students")
      .add({
        id: id,
        name: name,
        gpa: gpa,
      })
      .then(() => {
        setid("");
        setName("");
        setgpa("");
        Alert.alert(
          "Adding Alert",
          "New Student was added!! Pls check your DB!!"
        );
      });
  };
  // class AddStudent extends Component {
  //   constructor() {
  //     super();

  //     this.subjCollection = firebase.firestore().collection("students");

  //     this.state = {
  //       id: "",
  //       name: "",
  //       gpa: "",
  //     };
  //   }

  //   inputValueUpdate = (val, prop) => {
  //     const state = this.state;
  //     state[prop] = val;
  //     this.setState(state);
  //   };

  //   storeStudent() {
  //     this.subjCollection
  //       .add({
  //         id: this.state.id,
  //         name: this.state.name,
  //         gpa: this.state.gpa,
  //       })
  //       .then((res) => {
  //         this.setState({
  //           id: "",
  //           name: "",
  //           gpa: "",
  //         });
  //         Alert.alert(
  //           "Adding Alert",
  //           "New Student was added!! Pls check your DB!!"
  //         );
  //       });
  //   }

  //   render() {

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/IT_Logo.png")}
        style={{ width: 120, height: 100 }}
        containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Input
        placeholder={"Student id"}
        // value={this.state.id}
        // onChangeText={(val) => this.inputValueUpdate(val, "id")}
        value={id}
        onChangeText={(val) => setid(val)}
      />
      <Input
        placeholder={"Student Name"}
        // value={this.state.name}
        // onChangeText={(val) => this.inputValueUpdate(val, "name")}
        value={name}
        onChangeText={(val) => setName(val)}
      />
      <Input
        placeholder={"Student gpa"}
        // value={this.state.gpa}
        // onChangeText={(val) => this.inputValueUpdate(val, "gpa")}
        value={gpa}
        onChangeText={(val) => setgpa(val)}
      />
      {/* <Button title="Add Student" onPress={() => this.storeStudent()} /> */}
      <Button title="Add Student" onPress={storeStudents} />

      <Button
        title="View Student"
        onPress={
          () => navigation.navigate("ViewStudent")
          // () => console.log("ViewStudent")
        }
      />
    </View>
  );
  //   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default AddStudent;
