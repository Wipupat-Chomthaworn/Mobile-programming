import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

// import Tab1 from "./screens/Tab1";
// import Tab2 from "./screens/Tab2";
// import Tab3 from "./screens/Tab3";

import Draw1 from "./screens/Draw1";
import Draw2 from "./screens/Draw2";
import Draw3 from "./screens/Draw3";

import NestingNavigator1 from "./navigation/NestingNavigator1";
import NestingNavigator2 from "./navigation/NestingNavigator2";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Tab_3"
        screenOptions={{
          tabBarActiveTintColor: "darkblue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "lightblue" },
          tabBarLabelStyle: { fontSize: 15 },
        }}
      >
        <Tab.Screen
          name="Tab_1"
          component={Tab1}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="wechat" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Tab_2"
          component={Tab2}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="retweet" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Tab_3"
          component={Tab3}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <AntDesign name="customerservice" size={size} color={color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerActiveTintColor: "orange",
//           drawerInactiveTintColor: "gray",
//         }}
//       >
//         <Drawer.Screen
//           name="Draw_1"
//           component={Draw1}
//           options={{
//             drawerLabel: "Menu 1",
//             drawerIcon: ({ color }) => {
//               return <AntDesign name="tags" size={24} color={color} />;
//             },
//           }}
//         />
//         <Drawer.Screen
//           name="Draw_2"
//           component={Draw2}
//           // options={{ drawerLabel: "Exit" }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   // return <NestingNavigator1 />;
//   return <NestingNavigator2 />;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
