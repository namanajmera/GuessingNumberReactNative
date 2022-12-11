import { StyleSheet, Text, TextInput, View } from 'react-native'
import PrimaryButtons from '../components/PrimaryButtons'

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize='none' autoCorrect={false}/>
      <PrimaryButtons>Reset</PrimaryButtons>
      <PrimaryButtons>Confirm</PrimaryButtons>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 40,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#72063c',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})