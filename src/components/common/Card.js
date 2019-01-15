import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyles}>
        {props.children} 
    </View>
  )
}

const styles = {
  containerStyles: {
    minWidth: 350,
    margin: 10,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#ddd',
    backgroundColor: '#00000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 2,
    elevation: 1
  }
}

export { Card };