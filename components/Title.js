import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title(props) {
   const {title} = props;
  return (
    <View>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   title: {
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold",
      color: "#ddb52f",
      borderWidth: 2,
      borderColor: "#ddb52f",
      padding: 12,
   },
})