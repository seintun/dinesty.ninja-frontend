import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyles}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyles: {
    margin: 5,
    padding: 5,
    backgroundColor: '#00000000',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export { CardSection }