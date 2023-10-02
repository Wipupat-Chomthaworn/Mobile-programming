import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Ionicons';
const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={50}
    color={Platform.OS === "android" ? "purple" : "orange"}
    />
  )
}

export default CustomHeaderButton

const styles = StyleSheet.create({})