import React, { Component } from "react";
import { 
  CardItem,
  Text, 
  Button,
  Thumbnail,
  Left, 
  Right 
} from "native-base";
import { Ionicons } from '@expo/vector-icons';

class ItemsInCart extends Component {
  render() {
    const { name, price } = this.props.item
    return(
      <CardItem>
        <Left>
          <Thumbnail source={{uri: `https://source.unsplash.com/1600x900/?food,dine,wine`}} />
            <Text>{name}</Text>
            <Text note>{price}</Text>
        </Left>
          <Right>
          <Button style={{padding: 10, backgroundColor: '#F43309'}}>
            <Ionicons name="ios-close-circle" size={32} color="white"/>
          </Button>
        </Right>
      </CardItem>  
    )
  };
};

export default ItemsInCart;