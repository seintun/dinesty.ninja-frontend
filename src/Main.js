import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigator from './navigation/AppNavigator'

class Main extends Component {
  render() {
    return(
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    )
  };
}
export default Main;