import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";

export default function Title(props) {
  const { title } = props;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.accent500,
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
