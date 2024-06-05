import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import Splash from './screens/Splash.js';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='auto' />
      <Splash />
    </View>
  );
}
