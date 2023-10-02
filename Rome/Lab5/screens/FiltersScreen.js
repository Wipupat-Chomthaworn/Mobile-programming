import React, {useState}  from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const FiltersScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const toggleSwitch2 = () =>setIsEnabled2(previousState => !previousState);
const toggleSwitch3 = () =>setIsEnabled3(previousState => !previousState);
const toggleSwitch4 = () =>setIsEnabled4(previousState => !previousState);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch
          trackColor={{ true: "#ff6f00", false: "lightgray" }}
          thumbColor={"#ff6f00"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Lactose-free</Text>
        <Switch
          trackColor={{ true: "#ff6f00", false: "lightgray" }}
          thumbColor={"#ff6f00"}
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ true: "#ff6f00", false: "lightgray" }}
          thumbColor={"#ff6f00"}
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ true: "#ff6f00", false: "lightgray" }}
          thumbColor={"#ff6f00"}
          onValueChange={toggleSwitch4}
          value={isEnabled4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
