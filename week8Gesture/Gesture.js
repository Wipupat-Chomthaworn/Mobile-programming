import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Gesture = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,});
        pan.setValue({ x: 0, y: 0 });},
    onPanResponderMove: (evt, gestureState) => {
      const touches = evt.nativeEvent.touches;
      if (touches.length === 1){
        console.log("1 finger")
        Animated.event([
              null, //set usestate ได้ ถ้าไม่ใช้ null
{dx: pan.x, /* x,y are Animated.Value*/ dy: pan.y,},],
            { useNativeDriver: false }
          )(evt, gestureState);
      } else if (touches.length >= 2) {
        console.log("2 finger")
        Animated.spring(scale, {
          toValue: 3,friction: 3,
          useNativeDriver: false,
        }).start();}},
    onPanResponderRelease: () => {
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
      pan.flattenOffset();
      },});

  return (
    <View style={styles.container}>
      <Animated.View
  {...panResponder.panHandlers}
  style={[styles.box, pan.getLayout(),
  { transform: [{ scale: scale }] }]}/>
    </View>);};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#61dafb",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});

export default Gesture;
