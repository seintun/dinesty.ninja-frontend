import React, { Component } from 'react';
import { ScrollView } from 'react-native'
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
      <ItemsInCart key={item.id} item={item}/>
    )
  }
  render() {
    return !this.props.currentBizInfo.name ? null : (
      <Container>
        <BizHeader bizInfo={this.props.currentBizInfo} />
        <ScrollView>
          {this.props.order.cart ? this.renderIteminCart() : null}
        </ScrollView>
        <CardItem>
          <Button style={{flex: 1}} onPress={()=> console.log('Make Reservation button pressed')}>
            <Text>Make Reservation</Text>
          </Button>
        </CardItem>
        <CurrentBizMenu bizID={this.props.navigation.state.params.bizID}/>
      </Container>
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
