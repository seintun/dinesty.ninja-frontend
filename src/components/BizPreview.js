import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from './common'

const BizPreview = ({ biz }) => {
  const { name, address, phone, cuisine, img } = biz
  console.log(biz, 'Inside BizPreview')
  return(
    <View>
      <Text>{name}</Text> 
      <Text>({cuisine})</Text>
      <Text>{phone}</Text>
    </View>
  ) 
};

export default BizPreview