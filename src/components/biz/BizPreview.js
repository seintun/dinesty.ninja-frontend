import React from 'react';
import { TouchableOpacity, View, Text, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from '../common'

const BizPreview = ({ biz }) => {
  const { name, address, cuisine, img } = biz
  const { 
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle, 
    thumbnailContainerStyle,
    imageStyle
  } = styles
  return(
    // When the BizPreview card is clicked, navigates to BizInfoPage while passing the bizID props
    <TouchableOpacity>
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image 
              style={thumbnailStyle}
              source={{ uri: img }} 
            />      
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{name}</Text>
            <Text>({cuisine})</Text>
            <Text>{address.address1}</Text>
            <Text>{address.city}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: img}}
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(img)}>
            {'Redirects to Info page'}
          </Button> 
        </CardSection>
      </Card>
    </TouchableOpacity>
  ) 
};


const styles = {
  headerContentStyle: {
    flextDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    borderRadius: 10,
    height: 180,
    flex: 1,
    width: null
  }
}

export default BizPreview