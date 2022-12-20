import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";

export default function GameScreen() {
  const [title, setTitle] = useState("Opponent's Guess");
  return (
    <View style={styles.screen}>
      <Title title={title}/>
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
