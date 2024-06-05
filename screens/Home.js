import {
  Text,
  SafeAreaView, // render content within the safe area boundaries of a device (currently applicable only to iOS devices).
  ScrollView,
  StyleSheet
} from 'react-native';

import LottieContainer from '../components/LottieContainer';
import { animations } from '../constants/lottieAnimations';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>A Glimpse to Lottie Animations</Text>
        {animations.map((animation, index) => (
          <LottieContainer key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
