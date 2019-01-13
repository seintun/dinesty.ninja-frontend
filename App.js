import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'

import { Header } from './src/components/common'
import BizList from './src/components/BizList';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Header headerText='🐿 Dinesty Ninja 🐳' />
        <Text>Welcome to Dinesty Ninja, where ninjas infiltrate line!</Text>
        <BizList />
      </View>
    </Provider>
  );
};
export default App
