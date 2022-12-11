import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function PrimaryButtons({ children }) {
   const pressHandler = () => {
      console.log("Pressed...")
   }
   return (
      <View style={styles.buttonOuterContainer}>
         <Pressable style={styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{ color: '#640233'}}>
            <Text style={styles.buttonText}>{children}</Text>
         </Pressable>
      </View>
   )
}

const styles = StyleSheet.create({
   buttonOuterContainer:{
      borderRadius: 28,
      marginVertical: 10,
      overflow:'hidden'
   },
   buttonInnerContainer: {
      backgroundColor: '#72063c',
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
   },
   buttonText: {
      color: 'white',
      textAlign: 'center'
   }
})