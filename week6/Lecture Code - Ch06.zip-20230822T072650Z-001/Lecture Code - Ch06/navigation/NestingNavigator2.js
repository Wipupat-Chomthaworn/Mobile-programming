import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Tab1 from "../screens/Tab1";
import Tab2 from "../screens/Tab2";
import Tab3 from "../screens/Tab3";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab_1" component={Tab1} />
      <Tab.Screen name="Tab_2" component={Tab2} />
      <Tab.Screen name="Tab_3" component={Tab3} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="S1"
      screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
    >
      <Stack.Screen
        name="S1"
        component={Screen1}
        options={{
          title: "Screen 1",
        }}
      />
      <Stack.Screen
        name="S2"
        component={Screen2}
        options={({ route }) => ({
          title: route.params.prev + " ID-" + route.params.id.toString(),
        })}
      />
      <Stack.Screen name="S3" component={Screen3} />
    </Stack.Navigator>
  );
}

export default function NestingNavigator2() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab_1" component={Tab1} />
        <Tab.Screen name="Tab_2" component={MyStack} />
        <Tab.Screen name="Tab_3" component={Tab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
