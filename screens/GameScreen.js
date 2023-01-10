import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

export default function GameScreen({userNumber}) {

  const generateRandomBeteen = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBeteen(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  const [title, setTitle] = useState("Opponent's Guess");
  const initialGuess = generateRandomBeteen(1, 100, userNumber);
  console.log('initialGuess', initialGuess);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title title={title} />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
});
