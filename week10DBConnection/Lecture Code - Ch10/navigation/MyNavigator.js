import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import AddStudent from "../screens/AddStudent";
import UpdateStudent from "../screens/UpdateStudent";
import ViewStudent from "../screens/ViewStudent";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddStudent">
        <Stack.Screen
          name="AddStudent"
          component={AddStudent}
          options={{
            headerStyle: {
              backgroundColor: "#1AA7EC",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="UpdateStudent"
          component={UpdateStudent}
          options={{
            headerStyle: {
              backgroundColor: "#1AA7EC",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ViewStudent"
          component={ViewStudent}
          options={{
            headerStyle: {
              backgroundColor: "#1AA7EC",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
