import { StyleSheet, Text, TextInput, View } from 'react-native'
import PrimaryButtons from '../components/PrimaryButtons'

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButtons>Reset</PrimaryButtons>
      <PrimaryButtons>Confirm</PrimaryButtons>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 100,
    padding: 16,
    backgroundColor: '#72063c',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
})