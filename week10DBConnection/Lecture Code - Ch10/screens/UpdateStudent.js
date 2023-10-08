import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";
import { Item } from "react-navigation-header-buttons";
// update Student screen
class UpdateStudent extends Component {
  constructor() {
    super();

    this.state = {
      key: "",
      id: "",
      name: "",
      gpa: "",
    };
  }

  componentDidMount() {
    const subjDoc = firebase
      .firestore()
      .collection("students")
      .doc(this.props.route.params.key); //document id like "J55NhdOz6HMTPZzoYXMi"
    subjDoc.get().then((res) => {
      if (res.exists) {
        const subj = res.data();
        this.setState({
          key: res.id,
          id: subj.id,
          name: subj.name,
          gpa: subj.gpa,
        });
      } else {
        console.log("Document does not exist!!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state); //what is set state
  };

  updateStudent() {
    const updateSubjDoc = firebase
      .firestore()
      .collection("students")
      .doc(this.state.key);
    updateSubjDoc
      .set({
        id: this.state.id,
        name: this.state.name,
        gpa: this.state.gpa,
      })
      .then(() => {
        Alert.alert(
          "Updating Alert",
          "The Student was updated!! Pls check your DB!!"
        );
      });
  }
  deleteStudent() {
    const deleteSubjDoc = firebase
      .firestore()
      .collection("students")
      .doc(this.state.key); //what is state
    deleteSubjDoc
      .delete()
      .then((res) => {
        console.log("res", res) //res undefined ask
        Alert.alert(
          "Delete Alert",
          "The Student was Deleted!! Pls check your DB!!"
        );
        this.props.navigation.navigate("ViewStudent");
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Input
          placeholder={"Student id"}
          value={this.state.id}
          onChangeText={(val) => this.inputValueUpdate(val, "id")}
        />
        <Input
          placeholder={"Student Name"}
          value={this.state.name}
          onChangeText={(val) => this.inputValueUpdate(val, "name")}
        />
        <Input
          placeholder={"Student gpa"}
          value={this.state.gpa}
          onChangeText={(val) => this.inputValueUpdate(val, "gpa")}
        />
        <Button
          title="Update Student"
          onPress={() => {
            this.updateStudent();
          }}
        />
        <Button
          title="Delete Student"
          containerStyle={{ marginTop: 10 }}
          onPress={() => {
            this.deleteStudent();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default UpdateStudent;
