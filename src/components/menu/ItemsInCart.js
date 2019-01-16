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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
  removeItemtoCart
} from '../../actions/OrderAction'

class ItemsInCart extends Component {
  render() {
    const { id, name, price } = this.props.item
    return(
      <CardItem key={id}>
        <Left>
          <Thumbnail source={{uri: `https://source.unsplash.com/${price}x900/?food,dine,wine`}} />
            <Text>{name}</Text>
            <Text note>${(price/100).toFixed(2)}</Text>
        </Left>
          <Right>
          <Button style={{padding: 10, backgroundColor: '#F43309'}} onPress={() => this.props.removeItemtoCart(id)}>
            <Ionicons name="ios-close-circle" size={32} color="white"/>
          </Button>
        </Right>
      </CardItem>  
    )
  };
};
const mapStateToProps  = state => ({
  order: state.order
})
const mapDispatchToProps = dispatch => ({
  removeItemtoCart: bindActionCreators(removeItemtoCart, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemsInCart)