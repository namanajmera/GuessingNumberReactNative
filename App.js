import { ImageBackground, StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/background.png')} style={styles.rootScreen} resizeMode="cover" imageStyle={styles.backgroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
  backgroundImage:{
    opacity:0.12,
  }
});
