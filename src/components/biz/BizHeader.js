import React from 'react';
import { View, Linking} from 'react-native';
import { CardItem, Text } from 'native-base'

const BizHeader = ({ bizInfo }) => {
  const {
    name,
    cuisine,
    phone,
    address,
    yelpURL
  } = bizInfo
  const addressStr = `${address.address1}, ${address.address2}`
  const cityStateStr = `${address.city}, ${address.state}`
  const { 
    headerTextStyle
  } = styles
  return(
    <CardItem>
      <View>
        <Text style={headerTextStyle}>{name}</Text>
        <Text onPress={() => Linking.openURL(yelpURL)}>View on Yelp</Text>
        <Text>({cuisine})</Text>
        <Text>{phone}</Text>
        <Text>{addressStr}, {cityStateStr}</Text>
      </View>
    </CardItem>
  ) 
};

const styles = {
  headerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 3
  }
}

export default BizHeader