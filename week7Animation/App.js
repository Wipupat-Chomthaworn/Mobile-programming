import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import { AntDesign } from "@expo/vector-icons";
import SpringScreen from "./SpringScreen";
import SequenceScreen from "./SequenceScreen";
import ParallelScreen from "./ParallelScreen";


import { Animated, Button, Easing } from "react-native";

const Tab = createBottomTabNavigator();
export default function App() {
  // const springVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0
  // console.log("Spring Tab")
  // const spring = () => {
  //   console.log("spring..");
  //   Animated.spring(springVal, {
  //     toValue: 1,
  //     friction: 1,
  //     tension: 10,
  //     // bounciness: 30,
  //     // speed: 20,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     springVal.setValue(0.3);
  //   });
  //   return (
  //     <View style={styles.container}>
  //       <Animated.Image
  //         style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
  //         source={require("./assets/IT_Logo.png")}
  //       />
  //       <Button title="Spring" onPress={spring} />
  //     </View>
  //   );}
  return (
    <NavigationContainer>
      {/* // กำหนดรายละเอียดของ navigator */}
      <Tab.Navigator>
        <Tab.Screen
          name="Spring"
          component={SpringScreen}
          options={{
            headerShown: false, //hide header of tab
            tabBarIcon: ({ color }) => {
              return <AntDesign name="apple1" size={24} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name="Sequence"
          component={SequenceScreen}
          options={{
            headerShown: false, //hide header of tab
            tabBarIcon: ({ color }) => {
              return <AntDesign name="apple1" size={24} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name="Parallel"
          component={ParallelScreen}
          options={{
            headerShown: false, //hide header of tab
            tabBarIcon: ({ color }) => {
              return <AntDesign name="apple1" size={24} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
