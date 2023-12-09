import { StyleSheet, Text, View, Button, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pdf from 'react-native-pdf';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Chip } from '@rneui/base';

const Home = ({ navigation, route }: any) => {
  // Mock data
  const data = [
    { id: '1', text: 'Item 1', picImage: 'data:image/png;base64,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' },
    { id: '2', text: 'Item 2', picImage: 'data:image/png;base64,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' },
  ];
  const user = useSelector((state: any) => state.user);
  const allsumarize = useSelector((state: any) => state.sumarize);
  const tagcategories = useSelector((state: any) => state.tagcategories)
  const favsumarize = allsumarize
    .filter((sumarize: any) => {
      // Check if any user in the user array includes the sumarize._id
      return user.listsumarize.some((itemuser: any) => itemuser.includes(sumarize._id));
    })

  const recommendsummarize = allsumarize.filter((sumarize: any) =>
    sumarize.tag.some((item:any) => user.tag.some((data:any) => 
      data.tagname == item.tagname
    ))
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 20 }}>เเนะนำ</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal={true} // Set FlatList to horizontal mode
        renderItem={({ item }) => (
          <View style={styles.box1}>
            <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.picImage }} />
          </View>
        )}
      />
      {favsumarize.length != 0 ?
        <View>
          <View style={{ margin: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>รายการของคุณ</Text>
            <TouchableOpacity>
              <Text style={{ color: '#6667AB', fontWeight: 'bold', fontSize: 16 }}>See more</Text>
            </TouchableOpacity>

          </View>
          <FlatList
            data={favsumarize}
            keyExtractor={(item) => item._id}
            horizontal={true} // Set FlatList to horizontal mode
            renderItem={({ item }): any => (
              <TouchableOpacity style={styles.box2} onPress={() => navigation.navigate("Detail", { detail: item })} >
                <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.img.url }} />
              </TouchableOpacity>
            )}
          />
        </View> : null
      }
      <View>
        <View style={{ margin: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>คุณอาจจะชื่นชอบ</Text>
          <TouchableOpacity>
            <Text style={{ color: '#6667AB', fontWeight: 'bold', fontSize: 16 }} >See more</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={recommendsummarize}
          keyExtractor={(item) => item._id}
          horizontal={true} // Set FlatList to horizontal mode
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.box2} onPress={() => navigation.navigate("Detail", { detail: item })} >
              <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.img.url }} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <View style={{ margin: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>เเท็กเเนะนำ</Text>
        </View>
        <FlatList
          data={tagcategories}
          keyExtractor={(item: any) => item._id}
          scrollEnabled={false}
          numColumns={4}
          renderItem={({ item }) => (
            <Chip title={item.tagname} containerStyle={{ marginVertical: 15, marginHorizontal: 5 }} color={"#6667AB"} titleStyle={{ color: 'white' }} />
          )}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  box1: {
    width: 250,
    height: 200,
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  box2: {
    width: 130,
    height: 200,
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
});

export default Home
