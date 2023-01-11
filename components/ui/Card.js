import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function Card({ children }) {
  return (
     <View style={styles.inputContainer}>{children}</View>
  )
}

const styles = StyleSheet.create({
   inputContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 36,
      marginHorizontal: 40,
      borderRadius: 8,
      padding: 16,
      elevation: 4,
      backgroundColor: Colors.primary800,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
   },
})