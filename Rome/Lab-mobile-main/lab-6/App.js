import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigator from './navigation/MyNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MyNavigator />
    </NavigationContainer>
  );
}