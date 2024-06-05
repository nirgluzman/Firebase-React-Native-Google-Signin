import {
  Text,
  SafeAreaView, // render content within the safe area boundaries of a device (currently applicable only to iOS devices).
  ScrollView,
  StyleSheet
} from 'react-native';

// Animation library
import Animated, { FadeIn } from 'react-native-reanimated';

import LottieContainer from '../components/LottieContainer';
import { animations } from '../constants/lottieAnimations';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>A Glimpse to Lottie Animations</Text>
      <Animated.ScrollView entering={FadeIn.duration(500)}>
        {animations.map((animation, index) => (
          <LottieContainer key={index} {...animation} />
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 40
  }
});
