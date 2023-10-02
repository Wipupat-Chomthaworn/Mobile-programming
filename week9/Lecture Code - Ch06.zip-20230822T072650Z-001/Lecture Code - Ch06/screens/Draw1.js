import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import MyHeaderButton from "../components/MyHeaderButton";

const Draw1 = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Draw-1 Screen !!</Text>
    </View>
  );
};

// Draw1.navigationOptions = (navigationData) => {
//   return {
//     headerTitle: "Draw1-Screen",
//     headerLeft: () => {
//       return (
//         <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
//           <Item
//             title="Menu"
//             iconName="ios-list"
//             onPress={() => {
//               navigationData.navigation.toggleDrawer();
//             }}
//           />
//         </HeaderButtons>
//       );
//     },
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 20,
  },
});

export default Draw1;
