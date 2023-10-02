import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="S1"
        screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
      >
        <Stack.Screen
          name="S1"
          component={Screen1}
          options={{
            title: "Profile",
            // headerStyle: { backgroundColor: "pink" },
          }}
        />
        <Stack.Screen
          name="S2"
          component={Screen2}
          options={({ route }) => ({
            title: route.params.prev + " ID-" + route.params.id.toString(),
          })}
        />
        <Stack.Screen
          name="S3"
          component={Screen3}
          options={
            {
              // headerStyle: { backgroundColor: "blue" },
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
