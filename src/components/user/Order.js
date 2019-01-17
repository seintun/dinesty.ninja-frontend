import React, { Component } from "react";
import { View, DatePickerIOS, Picker } from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem,
  Item,
  Input,
  Label, 
  Text, 
  Button,
  Thumbnail,
  Left, 
  Right } from "native-base";
import { Ionicons } from '@expo/vector-icons';

class Order extends Component {
  state = {
    bizName: 'Marufuku Ramen SF',
    userName: 'NinjaX',
    date: new Date(),
    guests: 0,
    cart: [],
    preTax: 5499,
    tax: 0,
    tip: 0,
    total: 0
  }
  setDate = (newDate) => {
    this.setState({ date: newDate });
  }
  render() {
    return (
      <Container>
        <Header>
          <Text>Reservation Page</Text>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Button style={{padding: 10, flex: 1}}>
                <Ionicons name="ios-checkmark-circle" size={32} color="white" />
                <Text>Confirm Updates</Text>
              </Button>
            </CardItem>
            <CardItem header>
              <View>
                <Text>Reserved for: {this.state.date.toString().substr(0, 21)}</Text>
                <Text>Restaurant: {this.state.bizName}</Text>
                <Text>Name: {this.state.userName}</Text>
                <Text>Guest(s): {this.state.guests}</Text>
                <Text>Tax: {this.state.tax}</Text>
                <Text>Tip: {this.state.tip}</Text>
                <Text>Total: {this.state.total}</Text>
              </View>
            </CardItem>
            <CardItem>
              <Button style={{padding: 10, backgroundColor: '#F43309', flex: 1}}>
                <Ionicons name="ios-card" size={32} color="white" />
                <Text>Pay $${(this.state.total/100).toFixed(2)}</Text>
              </Button>
            </CardItem>
            <CardItem>
              <View style={{flex: 1}}>
                <DatePickerIOS
                  locale={"en"}
                  date={this.state.date}
                  onDateChange={this.setDate}
                />
              </View>
            </CardItem>
            <CardItem>
              <View style={{flex: 1}}>
                <Item fixedLabel>
                  <Label>Guest(s)</Label>
                  <Input onChangeText={(number) => this.setState({guests: number})}/>
                </Item>
              </View>
            </CardItem>
            <CardItem>
              <Button style={{padding: 10, flex: 1, backgroundColor: 'green'}}>
                <Ionicons name="ios-cart" size={32} color="white" />
                <Text>Add more Items</Text>
              </Button>
            </CardItem>
            <CardItem header>
              <Text>Menu Items placed:</Text>
            </CardItem>
            <CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: `https://source.unsplash.com/1600x900/?food,dine,wine`}} />
                  <Text>Sequoia Bourbon Barrel-Aged Sake (375ml)</Text>
                  <Text note>$5.00</Text>
              </Left>
                <Right>
                <Button style={{padding: 10, backgroundColor: '#F43309'}}>
                  <Ionicons name="ios-close-circle" size={32} color="white"/>
                </Button>
              </Right>
            </CardItem>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Order