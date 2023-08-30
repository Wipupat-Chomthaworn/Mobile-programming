import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = (itemData) => {
    return (
      // <CategoryGridTile
      //   title={..เขียนโค้ดเพิ่ม..}
      //   color={..เขียนโค้ดเพิ่ม..}
      //   onSelect={() => {
      //     // เขียนโค้ดเพิ่ม
      //   }}
      // />

      // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <CategoryGridTile> ข้างต้นแทน

      <CategoryGridTile style={{ height: 50, width: "40%" }} 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onSelect={()=> {
          console.log(itemData)
          navigation.navigate("CategoryMealsScreen", {id:itemData.item.id, categoryTitle:itemData.item.title})
        }}>
        {/* <Text>{console.log(itemData.item.title)}</Text> */}
      </CategoryGridTile>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างต้นแทน
 
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
