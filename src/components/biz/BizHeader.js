import React from 'react';
import { View, Text} from 'react-native';
import { Card, CardSection, Button } from '../common'

const BizHeader = () => {
  const { 
    headerContentStyle,
    headerTextStyle
  } = styles
  return(
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>Restaurant Name</Text>
          <Text>Cuisine</Text>
          <Text>123 Fake St, City, CA 95555</Text>
          <Text>+1(415)123-4567</Text>
        </View>
      </CardSection>
    </Card>
  ) 
};

const styles = {
  headerContentStyle: {
    flextDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
}

export default BizHeader