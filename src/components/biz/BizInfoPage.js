import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BizHeader from './BizHeader'
import CurrentBizMenu from '../menu/CurrentBizMenu'
import {
  findBizByID
} from '../../actions/BizAction'

class BizInfoPage extends Component {
  static navigationOptions = { 
    title: 'Business Info Page', 
  }
  async componentDidMount() {
    const bizID = await this.props.navigation.state.params.bizID
    await this.props.findBizByID(bizID)
  }
  render() {
    return !this.props.currentBizInfo.name ? null : (
      <View>
        {/* Add navigate.goBack button */}
        {/* Business Information Details */}
        <BizHeader bizInfo={this.props.currentBizInfo} />
        {/* <Text>{this.state.currentBizInfo.name}</Text> */}
        {/* Make Reservation Button */}
        {/* Menu Items bar to toggle different catgeory [Appetizers, Entrees, Desserts, Drinks]*/}
        <CurrentBizMenu bizID={this.props.navigation.state.params.bizID}/>
        {/* Expandable list of menu items with name, description/pricing when clicked */}
      </View>
    )
  }
}

const mapStateToProps  = state => ({
  currentBizInfo: state.biz.currentBizInfo
})
const mapDispatchToProps = dispatch => ({
  findBizByID: bindActionCreators(findBizByID, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(BizInfoPage);
