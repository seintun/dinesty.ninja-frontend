import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigator from './navigation/AppNavigator'
import Order from './components/user/Order'

class Main extends Component {
  render() {
    return(
      <View style={{ flex: 1 }}>
        <AppNavigator />
        {/* <Order /> */}
      </View>
    )
  };
}
export default Main;