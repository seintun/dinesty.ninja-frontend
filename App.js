import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'
import Main from './src/Main'

// Redux implemented at Application level with <Main /> component as primary view
const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex : 1 }}>
        <Main />
      </View>
    </Provider>
  );
};
export default App
