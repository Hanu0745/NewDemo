import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TaskOne from './src/components/firstTask';
// import StartGame from './src/components/taskGame/startGame';


export default function App() {

  console.log("hello hai");
  return (
    <LinearGradient colors={['#F5850F', '#38CD23']} style={styles.container}>
      <StatusBar backgroundColor='green' barStyle='dark-content' />
      <ImageBackground
        source={require('./assets/images/Sasuke uchiha.jpg')}
        resizeMethod='cover'
        style={styles.backimg}
        imageStyle={styles.imgback}
        >
      <TaskOne />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  backimg: {
    flex: 1,
    alignItems: 'center'
  },
  imgback: {
    opacity: 0.15
  }
});
