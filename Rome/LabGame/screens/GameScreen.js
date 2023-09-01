import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Colors from "../constants/colors";

const GameScreen = (props) => {
  // ...เพิ่มโค้ดกำหนด state...
  let correctNumber = props.correctNumber
  const [enteredValue, setEnteredValue] = useState("")
  const [guessNum, setGuessNum] = useState(0)
  const [confirmed, setConfirmed] = useState(false)
  const [round, setRound] = useState(0)

  let confirmedOutput;

  // ส่วนแสดงผลลัพธ์การทายตัวเลขของผู้เล่น
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text>You selected</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{guessNum}</Text>
        </View>
        <Text>{guessNum < correctNumber ? <Text>"The asnwer is greater"</Text> : guessNum > correctNumber ? <Text>"The asnwer is lowwer"</Text> : props.countRound(round)}</Text>
      </View>
    );
  }

  // // ฟังก์ชันสำหรับอัพเดทค่าที่ผู้เล่นกรอกให้กับสเตท enteredValue
  // const numberInputHandler = (inputText) => {
  //   // ...เพิ่มโค้ด...อัพเดทค่าสเตท enteredValue ด้วยค่า inputText ที่รับมา


  // };

  // ฟังก์ชันสำหรับเคลียร์ค่าในสเตท enteredValue
  const resetInputHandler = () => {
    // ...เพิ่มโค้ด...อัพเดทค่าสเตท enteredValue ให้เป็น ""
    setEnteredValue("")

  };

  // ฟังก์ชันสำหรับอัพเดทค่าสเตทต่างๆ เมื่อผู้เล่นกด confirm
  const confirmInputHandler = () => {
    setGuessNum(parseInt(enteredValue))//setNum
    setConfirmed(true)//setConfirmTrue
    setRound(round + 1)

  };

  return (
    <View style={styles.screen}>
      <Text>{correctNumber}</Text>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={newVal => setEnteredValue(newVal)}
          value={enteredValue}
        //...เพิ่ม property value และ onChangeText...
        />
        <View style={styles.buttonContainer}>

          <View style={styles.button}>
       
            <Button
              title="Reset"
              color={Colors.accent}
              // ...เพิ่ม property onPress...
              onPress={
                () => resetInputHandler()
              }
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              // ...เพิ่ม property onPress...
              onPress={
                () => confirmInputHandler()
              }
            />

          </View>
        </View>
      </View>
      {confirmedOutput}

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50

  },
  number: {
    color: Colors.accent,
    fontSize: 22,

  },
});

export default GameScreen;
