import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";
// view student_list in db sceen
class ViewStudent extends Component {
  constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("students");

    this.state = {
      student_list: [],
    };
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      console.log("res: ", res);
      console.log("res.data() : ", res.data());

      const { id, name, gpa } = res.data();
      all_data.push({ //push data
        key: res.id,
        id,
        name,
        gpa,
      });
    });
    // console.log("all_data : ", all_data);
    this.setState({
      student_list: all_data,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.subjCollection.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  // custom function
  navigateToViewStudent = (item) => {
    // Navigate to the "ViewStudent" screen
    this.props.navigation.navigate("UpdateStudent", { key: item });
  };
  render() {
    return (
      <ScrollView>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100, marginTop: 50 }}
        />
        {this.state.student_list.map((item, i) => {
          console.log("Item ", item);
          console.log("i ", i); //i is index
          // log example
          // LOG  res:  {"_delegate": {"_converter": null, "_document": {"createTime": [SnapshotVersion], "data": [ObjectValue], "documentState": 0, "documentType": 1, "key": [DocumentKey], "readTime": [SnapshotVersion], "version": [SnapshotVersion]}, "_firestore": [Object], "_firestoreImpl": [Object], "_key": {"path": [ResourcePath]}, "_userDataWriter": {"firestore": [Firestore]}, "metadata": {"fromCache": false, "hasPendingWrites": false}}, "_firestore": {"INTERNAL": {"delete": [Function _delete]}, "_appCompat": [Object], "_delegate": [Object], "_persistenceProvider": {}}}
          // LOG  res.data() :  {"gpa": 3.7, "id": "64070103", "name": "owen w"}
          // LOG  res:  {"_delegate": {"_converter": null, "_document": {"createTime": [SnapshotVersion], "data": [ObjectValue], "documentState": 0, "documentType": 1, "key": [DocumentKey], "readTime": [SnapshotVersion], "version": [SnapshotVersion]}, "_firestore": [Object], "_firestoreImpl": [Object], "_key": {"path": [ResourcePath]}, "_userDataWriter": {"firestore": [Firestore]}, "metadata": {"fromCache": false, "hasPendingWrites": false}}, "_firestore": {"INTERNAL": {"delete": [Function _delete]}, "_appCompat": [Object], "_delegate": [Object], "_persistenceProvider": {}}}
          // LOG  res.data() :  {"gpa": "3.70", "id": "64070108", "name": "Earth sup"}
          // LOG  res:  {"_delegate": {"_converter": null, "_document": {"createTime": [SnapshotVersion], "data": [ObjectValue], "documentState": 0, "documentType": 1, "key": [DocumentKey], "readTime": [SnapshotVersion], "version": [SnapshotVersion]}, "_firestore": [Object], "_firestoreImpl": [Object], "_key": {"path": [ResourcePath]}, "_userDataWriter": {"firestore": [Firestore]}, "metadata": {"fromCache": false, "hasPendingWrites": false}}, "_firestore": {"INTERNAL": {"delete": [Function _delete]}, "_appCompat": [Object], "_delegate": [Object], "_persistenceProvider": {}}}
          // LOG  res.data() :  {"gpa": "3.00", "id": "64070125", "name": "Rome Krung"}
          // LOG  Item  {"gpa": 3.7, "id": "64070103", "key": "0ocv3F640Ri22kmDxadl", "name": "owen w"}
          // LOG  i  0
          // LOG  Item  {"gpa": "3.70", "id": "64070108", "key": "J55NhdOz6HMTPZzoYXMi", "name": "Earth sup"}
          // LOG  i  1
          // LOG  Item  {"gpa": "3.00", "id": "64070125", "key": "de9Hv26rP4PL3bFlnR0n", "name": "Rome Krung"}
          // LOG  i  2
          return (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.id}</ListItem.Title>
                <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.gpa}</ListItem.Subtitle>
              </ListItem.Content>
              {/* Chevron is the arrow on the right of the list */}
              <ListItem.Chevron
                onPress={
                  () => this.navigateToViewStudent(item.key)
                  // console.log("press")
                }
              />
            </ListItem>
          );
        })}
      </ScrollView>
    );
  }
}

export default ViewStudent;
