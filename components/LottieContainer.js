import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import LottieView from 'lottie-react-native';

export default function LottieContainer({ name, src }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Button title={name} onPress={() => setShow(prev => !prev)} />
      <View style={styles.lottieContainer}>
        {show && (
          <LottieView
            style={styles.animationContainer}
            source={src}
            autoPlay // auto play whenever the component is rendered.
            loop={true} // true = loop forever.
            resizeMode='contain' // resize the animation to fit the container.
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  lottieContainer: {
    width: '200',
    height: '200',
    margin: 10
  },

  animationContainer: {
    width: '100%',
    height: 200
  }
});
