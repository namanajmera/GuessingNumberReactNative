import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButtons from "../components/ui/PrimaryButtons";


let minBoundry = 1;
let maxBoundry = 100;

const generateRandomBeteen = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBeteen(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({ userNumber }) {

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style:'cancel'}
      ])
      return;
    }
    if (direction === 'lower') {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    const newRndNumber = generateRandomBeteen(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(newRndNumber);
  }

  const [title, setTitle] = useState("Opponent's Guess");
  const initialGuess = generateRandomBeteen(minBoundry, maxBoundry, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title title={title} />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
        <View>
          <PrimaryButtons onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButtons>
          <PrimaryButtons onPress={() => nextGuessHandler('greater')}>+</PrimaryButtons>
        </View>
      </View>
      {/* <View>
        <Text>Log Rounds</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
});
