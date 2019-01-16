import React, { Component } from "react";
import { ScrollView, Image } from 'react-native'
import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class MenuItem extends Component {
  componentDidMount() {
    this.setState({ items: this.props.menuItems.map(item => {
      return {
        title: item.name,
        content: `Price: $${(item.price/100).toFixed(2)}\nDescription: ${item.description}`
      }
    })})
  }
  renderItem() {
    return this.props.menuItems.map(item =>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: `https://source.unsplash.com/${item.price+1}x900/?food,dine`}} />
              <Body>
                <Text>{item.name}</Text>
                <Text note>${(item.price/100).toFixed(2)}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={{margin: 20}}>{item.description}</Text>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: `https://source.unsplash.com/${item.price}x900/?food,dine`}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Button style={{flex: 1}}>
              <Icon active name="cart" />
              <Text>Add to Reservation</Text>
            </Button>
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