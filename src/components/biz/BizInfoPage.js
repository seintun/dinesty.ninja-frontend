import React, { Component } from 'react';
import { View, ScrollView } from 'react-native'
import { Container, CardItem, Text, Button } from 'native-base'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BizHeader from './BizHeader'
import ItemsInCart from '../menu/ItemsInCart'
import CurrentBizMenu from '../menu/CurrentBizMenu'
import {
  findBizByID
} from '../../actions/BizAction'

class BizInfoPage extends Component {
  static navigationOptions = { 
    title: 'Business Info Page'
  }
  async componentDidMount() {
    const bizID = await this.props.navigation.state.params.bizID
    await this.props.findBizByID(bizID)
  }
  renderIteminCart() {
    return this.props.order.cart.map(item => 
      <ItemsInCart key={item.id} item={item} />
    )
  }
  render() {
    return !this.props.currentBizInfo.name ? null : (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, maxHeight: 100, borderWidth: 2}}>
          {this.props.order.cart ? this.renderIteminCart() : null}
        </ScrollView>
        <BizHeader bizInfo={this.props.currentBizInfo} />
        <CardItem>
          <Button style={{flex: 1}} onPress={()=> this.props.navigation.navigate('Order')}>
            <Text>Place Reservation</Text>
          </Button>
        </CardItem>
        <CurrentBizMenu bizID={this.props.navigation.state.params.bizID}/>
      </View>
    )
  }
}

const mapStateToProps  = state => ({
  currentBizInfo: state.biz.currentBizInfo,
  order: state.order
})
const mapDispatchToProps = dispatch => ({
  findBizByID: bindActionCreators(findBizByID, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(BizInfoPage);
