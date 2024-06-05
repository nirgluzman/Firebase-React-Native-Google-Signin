import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Splash from './screens/Splash';
import Home from './screens/Home';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <StatusBar style='auto' />
      {/* Home component to be rendered once the animation is com pleted */}
      {isLoading ? <Splash onLoading={setIsLoading} /> : <Home />}
    </>
  );
}
