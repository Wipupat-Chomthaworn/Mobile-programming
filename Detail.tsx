import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Pdf from 'react-native-pdf';
import { Button, Chip } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Icon, color } from '@rneui/base';
import axios from 'axios';
import { Octicons } from '@expo/vector-icons';
import { collection, doc, getDoc, onSnapshot, query, where, updateDoc, arrayUnion } from 'firebase/firestore';
import { FIRE_STORE } from '../../FirebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { storeownerSummary } from '../redux/ownerSumarizeSlice';
import data from '../model/data';


const comment = [
  { id: 1, name: 'post malone', picImg: require("../model/postmalone.webp") },
  { id: 2, name: 'Markzuc', picImg: require("../model/mark.webp") },
  { id: 3, name: 'Youngohm', picImg: require("../model/youngohm.jpg") }
]

const Detail = ({ route, navigation }: any) => {
  const dispatch = useDispatch();
  const [author, setauthor] = useState<any | null>({});
  useEffect(() => {

    const datauser = doc(FIRE_STORE, "Users", route.params.detail.author);
    getDoc(datauser).then(res => setauthor(res.data()))
  }, [])

  const pdfDetaill = route.params.detail;
  const user = useSelector((state: any) => state.user)

  const AddToCollectionHandler = async () => {
    try {
      const userDocRef = doc(FIRE_STORE, "Users", user.uid);
      await updateDoc(userDocRef, {
        listsumarize: arrayUnion(pdfDetaill._id)
      });
      console.log("Added to Collection" , route.params.detail._id);
    } catch (error) {
      console.error("Error adding to collection:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pdfContainer}>
        <Pdf page={1} trustAllCerts={false} style={styles.pdf} horizontal source={{ uri: route.params.detail.file.url }}></Pdf>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {/* <Owen></Owen> */}
        <Button
          title="บันทึกลงรายการ"
          buttonStyle={{
            borderColor: '#6667AB',
            borderRadius: 20,
          }}
          type="outline"
          titleStyle={{ color: '#6667AB' }}
          containerStyle={{
            width: 170,
            marginHorizontal: 10,
            marginVertical: 20,
          }}
          onPress={() =>
            // console.log('Add to fav');
            // console.log("PDF ID = ", route.params.detail._id)
            AddToCollectionHandler()
          }
        />
        <Button
          title="Donate"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          titleStyle={{ color: '#56704F' }}
          buttonStyle={{
            backgroundColor: '#A5FC90',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#56704F'
          }}
          containerStyle={{
            height: 50,
            width: 170,
            marginHorizontal: 10,
            marginVertical: 20,
          }}
          onPress={() => console.log('aye')}
        />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <FlatList
          data={route.params.detail.tag}
          keyExtractor={(item: any) => item.id}
          scrollEnabled={false}
          numColumns={4}
          renderItem={({ item }) => (
            <Chip title={item.tagname} containerStyle={{ marginVertical: 15, borderWidth: 1, marginHorizontal: 10 }} color={"#6667AB"} titleStyle={{ color: 'white' }} />
          )}
        />
      </View>
      <View style={{ height: 100, backgroundColor: 'white' }}>
        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
          <View style={{ width: 100, height: 100, margin: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 80, height: 80, borderRadius: 150 / 2, marginLeft: 10 }} source={require('../model/postmalone.webp')}></Image>
            <View style={{ margin: 20 }}>
              <Text style={{ fontWeight: 'bold', width: 200, color: 'black', fontSize: 18 }}>{author.displayname}</Text>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Icon name="eye" type='font-awesome' size={22} color="#6667AB" />
                <Text style={{ marginHorizontal: 10 }}>{route.params.detail.view}</Text>
                <View>
                  <Octicons name="feed-heart" size={22} color="#EF3240" />
                </View>
                <Text style={{ marginHorizontal: 10, color: 'black' }}>{route.params.detail.like.length}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Button title={"ติดตาม"}></Button>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
        <Text style={{ textAlign: 'left', fontSize: 20 }}>Comment</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CommentScreen")}>
          <Text>All</Text>
        </TouchableOpacity>
      </View>
      {comment.map((x, index) => {
        return (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", height: 100, padding: 20, borderTopWidth: 5, borderColor: 'rgba(218, 218, 218, 0.2)' }}>
            <View style={{ width: 200 }}>
              <Text>{x.name}</Text>
              <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                  <Octicons name="feed-heart" size={22} color="black" />
                </TouchableOpacity>
                <Text style={{ padding: 2 }}>1000</Text>
              </View>

            </View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text>{x.name}</Text>
                <Text>16/08/2566</Text>
              </View>
              <Image source={x.picImg} style={styles.picture} />
            </View>
          </View>
        );
      })}
      <StatusBar style="auto" />
    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pdfContainer: {
    width: '100%',
    height: 500,
    alignItems: 'center',
  },
  pdf: {
    alignSelf: 'center',
    width: 400,
    height: 500,
  },
  picture: {
    width: 40, height: 40, borderRadius: 150 / 2, borderColor: 'white', borderWidth: 4
  }
})