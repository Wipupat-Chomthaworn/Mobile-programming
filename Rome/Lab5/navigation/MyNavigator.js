import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from '.././screens/CategoriesScreen';
import { CategoryMealsScreen } from '.././screens/CategoryMealsScreen';
import { MealDetailScreen } from '.././screens/MealDetailScreen';
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from "../store/actions/mealsAction";
import { TouchableOpacity } from "react-native-gesture-handler";
// import library ที่จำเป็น

// import screen ที่เกี่ยวข้อง

// สร้าง navigator ตามโจทย์กำหนด

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// function MyXXNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// อาจกำหนด Navigator เพิ่มได้
// function MyYYNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// สร้าง Navigator หลัก
const MealsFavTabNavigator = createBottomTabNavigator();
const MealsNavigator = createNativeStackNavigator();
const FavNavigatorNavigator = createNativeStackNavigator();
const FavNavigator = createNativeStackNavigator();
const FiltersNavigator = createNativeStackNavigator();
const MainNavigator = createDrawerNavigator();
function MealsFavTab() {
  return (
    <FavNavigatorNavigator.Navigator >
      <FavNavigatorNavigator.Screen name="Favorites2" options={{ headerShown: false }} component={FavNav} />
      <FavNavigatorNavigator.Screen name="Filters2" component={MealDetailScreen} />
    </FavNavigatorNavigator.Navigator>
  );
}
export default function MainNav() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator >
        <MainNavigator.Screen name="Meals" options={{ headerShown: false }} component={MyNavigator} />
        <MainNavigator.Screen name="Filters" options={{ headerShown: false, title: "Filter Meals" }} component={FillNav} />

      </MainNavigator.Navigator>
    </NavigationContainer>

  );
}
function FavNav() {
  return (
    <FavNavigator.Navigator >
      <FavNavigator.Screen name="Favorites" options={{ headerShown: true }} component={FavoritesScreen} />
      <FavNavigator.Screen name="MealDetail" options={{ headerShown: true }} component={MealDetailScreen} />
    </FavNavigator.Navigator>
  );
}
function FillNav() {
  return (
    <FiltersNavigator.Navigator >
      <FiltersNavigator.Screen name="Filters3" options={{ headerShown: false }} component={FiltersScreen} />
    </FiltersNavigator.Navigator>
  );
}

function MealNav() {
  const dispatch = useDispatch()
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
   };
   
  return (
    <MealsNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c", }
        , headerTintColor: "white",
      }}
    >
      <MealsNavigator.Screen name="Categories" component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }} />
      <MealsNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen}
        options={
          ({ route }) => ({
            title: route.params.Title,
          })} />

      <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen}
        options={
          ({ route }) => ({ title: route.params.Title, headerRight: () => (
           <TouchableOpacity  onPress={() => toggleFavoriteHandler(route.params.ID)}>
              <Icon name="ios-star" size={23} color={"white"}></Icon>
           </TouchableOpacity> ),})}
         />

    </MealsNavigator.Navigator>
  );
}
function MyNavigator() {
  return (

    <MealsFavTabNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c", }
        , headerTintColor: "white",
      }}
    >
      <MealsFavTabNavigator.Screen name="MealNav" options={{
        headerShown: false, tabBarIcon: ({ color, size }) => {
          return <Icon name="ios-restaurant" size={size} color={color} />;
        },
      }} component={MealNav} />
      <MealsFavTabNavigator.Screen name="MealsFavTab" options={{
        headerShown: false, tabBarIcon: ({ color, size }) => {
          return <Icon name="ios-star" size={size} color={color} />;
        },
      }} component={MealsFavTab} />

    </MealsFavTabNavigator.Navigator>



  );
}

