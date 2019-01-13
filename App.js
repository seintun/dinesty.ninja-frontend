import React from 'react';
import { View, Text } from 'react-native';
import { Header } from './src/components/common'

const App = () => {
  return (
    <View>
      <Header headerText='🐿 Dinesty Ninja 🐳' />
      <Text>Welcome to Dinesty Ninja, where ninjas infiltrate line!</Text>
    </View>
  );
};
export default App
