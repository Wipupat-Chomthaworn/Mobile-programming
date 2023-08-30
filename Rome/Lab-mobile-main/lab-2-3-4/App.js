// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Lab2_2 } from './screens/lab2-2'
import { Lab2_1 } from './screens/lab2-1';
import { Lab3_1 } from './screens/lab3-1'
import { Lab3_2 } from './screens/lab3-2'
import Lab4 from './screens/lab4'
const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Lab2_1}
          options={{ title: 'lab2.1' }}
        />
        <Stack.Screen name="Lab2.2" component={Lab2_2} options={{ title: 'lab2.2' }} />
        <Stack.Screen name="Lab3.1" component={Lab3_1} options={{ title: 'Lab3.1' }} />
        <Stack.Screen name="Lab3.2" component={Lab3_2} options={{ title: 'Lab3.2' }} />
        <Stack.Screen name="lab4" component={Lab4} options={{ title: 'Lab4' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

