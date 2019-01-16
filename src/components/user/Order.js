import React, { Component } from "react";
import { View, DatePickerIOS } from 'react-native';
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
  Button
} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import ItemsInCart from '../menu/ItemsInCart'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
  // addItemtoCart
} from '../../actions/OrderAction'

class Order extends Component {
  static navigationOptions = { 
    title: 'Reservation'
  }
  state = {
    bizID: "5c346548667e879434054621",
    userID: "5c355340b9481947fa50c9ea",
    bizName: "Marufuku Ramen SF",
    userName: "Ninja X",
    guests: 0,
    date: new Date(),
    cart: [],
    paid: false,
    cancelled: false,
    total: 0,
    tax: 0,
    tip: 0
  }
  setDate = (newDate) => {
    this.setState({ date: newDate });
  }
  renderIteminCart() {
    return this.props.order.cart.map(item => 
      <ItemsInCart key={item.id} item={item}/>
    )
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
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
            {/* <CardItem>
              <Button style={{padding: 10, backgroundColor: '#F43309', flex: 1}} onPress={()=> console.log('Pay $ button pressed')}>
                <Ionicons name="ios-card" size={32} color="white" />
                <Text>Pay ${(this.state.total/100).toFixed(2)}</Text>
              </Button>
            </CardItem> */}
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
            {/* <CardItem>
              <Button style={{padding: 10, flex: 1}} onPress={()=> console.log('Confirm Updates button pressed')}>
                <Ionicons name="ios-checkmark-circle" size={32} color="white" />
                <Text>Confirm Updates</Text>
              </Button>
            </CardItem> */}
            <CardItem>
              <Button style={{padding: 10, flex: 1}}  onPress={()=> console.log('Confirm Reservation button clicked!')}>
                <Ionicons name="ios-restaurant" size={32} color="white" />
                <Text>Confirm Reservation</Text>
              </Button>
            </CardItem>
            {/* <CardItem>
              <Button style={{padding: 10, flex: 1, backgroundColor: 'green'}} onPress={()=> console.log('Add item in order button pressed')}>
                <Ionicons name="ios-cart" size={32} color="white" />
                <Text>Add more Items</Text>
              </Button>
            </CardItem> */}
            <CardItem header>
              <Text>Menu Items placed:</Text>
            </CardItem>
            <View style={{flex: 1}}>
              {this.props.order.cart ? this.renderIteminCart() : null}
            </View>
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps  = state => ({
  order: state.order
})
const mapDispatchToProps = dispatch => ({
  // addItemtoCart: bindActionCreators(addItemtoCart, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Order)