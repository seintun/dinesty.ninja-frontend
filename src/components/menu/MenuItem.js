import React, { Component } from "react";
import { ScrollView, Image } from 'react-native'
import { Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
  addItemtoCart
} from '../../actions/OrderAction'

class MenuItem extends Component {
  handleAddItemtoCart = (item) => {
    this.props.addItemtoCart(item)
  }
  renderItem() {
    return this.props.menuItems.map(item =>
      <Content key={item.id}>
        <Card key={item.id}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: `https://source.unsplash.com/${item.price+1}x900/?food,${item.category}`}} />
              <Body>
                <Text>{item.name}</Text>
                <Text note>${(item.price/100).toFixed(2)}</Text>
              </Body>
            </Left>
            <Right>
              <Button style={{padding: 3, backgroundColor: 'green'}} onPress={()=> this.handleAddItemtoCart(item)}>
                <Ionicons name="ios-cart" color="white" />
                <Text>Add Item</Text>
              </Button>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Text style={{margin: 20}}>{item.description}</Text>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: `https://source.unsplash.com/${item.price}x901/?food,${item.category}`}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
        </Card>
      </Content>
    );
  }
  render() {
    return (
      <ScrollView>
        {this.renderItem()}
      </ScrollView>
    );
  }
}
const mapStateToProps  = state => ({
  order: state.order
})
const mapDispatchToProps = dispatch => ({
  addItemtoCart: bindActionCreators(addItemtoCart, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)