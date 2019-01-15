import React from 'react';
import { View, Text, Linking} from 'react-native';
import { Card, CardSection, Image } from '../common'

const BizHeader = ({ bizInfo }) => {
  const {
    name,
    cuisine,
    phone,
    address,
    img,
    yelpURL
  } = bizInfo
  const addressStr = `${address.address1}, ${address.address2}`
  const cityStateStr = `${address.city}, ${address.state}`
  const { 
    headerContentStyle,
    headerTextStyle
  } = styles
  return(
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
          <Text>({cuisine})</Text>
          <Text>{addressStr}</Text>
          <Text>{cityStateStr}</Text>
          <Text>{phone}</Text>
          <Text onPress={() => Linking.openURL(yelpURL)}>View on Yelp</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    margin: 3
  }
}

export default BizHeader