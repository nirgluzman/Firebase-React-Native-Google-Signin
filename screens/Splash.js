import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/confetti.json')}
        autoPlay // auto play whenever the component is rendered.
        loop={true} // loop forever.
        resizeMode='cover' // cover the whole screen.
        //onAnimationFinish={ }
        style={styles.animationContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // fill the entire screen
    justifyContent: 'center', // align children along the MAIN axis of their container.
    alignItems: 'center' // align children along the CROSS axis of their container.
  },
  animationContainer: {
    width: '100%',
    height: 300
  }
});
