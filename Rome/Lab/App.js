import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Lab21, Lab22, Lab31, Lab32, Nine } from './lab_components/index';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Lab2_1"
        onPress={() => navigation.navigate('Lab21')}
      />
      <Button
        title="Lab2_2"
        onPress={() => navigation.navigate('Lab22')}
      />

      <Button
        title="Lab3_1"
        onPress={() => navigation.navigate('Lab31')}
      />
      <Button
        title="Lab3_2"
        onPress={() => navigation.navigate('Lab32')}
      />
      <Button
        title="Nine"
        onPress={() => navigation.navigate('Nine')}
      />

    </View>
  );
};

export default function Lab3() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Lab' }}
        />
        <Stack.Screen
          name="Lab21"
          component={Lab21}
        />
        <Stack.Screen
          name="Lab22"
          component={Lab22}
        />

        <Stack.Screen
          name="Lab31"
          component={Lab31}
        />
        <Stack.Screen
          name="Lab32"
          component={Lab32}
        />
         <Stack.Screen
          name="Nine"
          component={Nine}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

