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
  setBizToOrder,
  setOrderDate,
  setGuests,
  createOrder
} from '../../actions/OrderAction'

class Order extends Component {
  static navigationOptions = { 
    title: 'Reservation'
  }
  state = {
    chosenDate: new Date(),
    newOrder: {
      bizID: "",
      userID: "",
      bizName: "",
      userName: "",
      guests: 0,
      date: "",
      cart: [],
      paid: false,
      cancelled: false,
      total: 0,
      tax: 0,
      tip: 0
    }
  }
  
  async componentDidMount() {
    const { id, name} = await this.props.currentBizInfo
    await this.props.setBizToOrder(id, name)
  }
  setDate = (newDate) => {
    this.setState({chosenDate: newDate})
    this.props.setOrderDate(newDate.toString());
  }
  setGuests = (number) => {
    this.props.setGuests(Number(number));
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
                <Text>Reserved for: {this.props.order.date.toString().substr(0, 21)}</Text>
                <Text>Restaurant: {this.props.order.bizName}</Text>
                <Text>Name: {this.props.order.userName}</Text>
                <Text>Guest(s): {this.props.order.guests}</Text>
                <Text>Tax: {this.props.order.tax}</Text>
                <Text>Tip: {this.props.order.tip}</Text>
                <Text>Total: {this.props.order.total}</Text>
              </View>
            </CardItem>
            <CardItem>
              <View style={{flex: 1}}>
                <DatePickerIOS
                  locale={"en"}
                  date={this.state.chosenDate}
                  onDateChange={this.setDate}
                />
              </View>
            </CardItem>
            <CardItem>
              <View style={{flex: 1}}>
                <Item fixedLabel>
                  <Label>Guest(s)</Label>
                  <Input onChangeText={this.setGuests}/>
                </Item>
              </View>
            </CardItem>
            <CardItem>
              <Button style={{padding: 10, flex: 1}}  onPress={() => this.props.createOrder(this.props.order)}>
                <Ionicons name="ios-restaurant" size={32} color="white" />
                <Text>Confirm Reservation</Text>
              </Button>
            </CardItem>
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
  currentBizInfo: state.biz.currentBizInfo,
  order: state.order
})
const mapDispatchToProps = dispatch => ({
  setBizToOrder: bindActionCreators(setBizToOrder, dispatch),
  setOrderDate: bindActionCreators(setOrderDate, dispatch),
  setGuests: bindActionCreators(setGuests, dispatch),
  createOrder: bindActionCreators(createOrder, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Order)