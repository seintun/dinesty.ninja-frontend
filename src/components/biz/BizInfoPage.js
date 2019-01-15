import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BizHeader from './BizHeader'
import {
  findBizByID
} from '../../actions/BizAction'

class BizInfoPage extends Component {
  static navigationOptions = { 
    title: 'Business Info Page', 
  }
  state= { }
  async componentDidMount() {
    const bizID = await this.props.navigation.state.params.bizID
    await this.props.findBizByID(bizID)
    await this.setState({ currentBizInfo: this.props.currentBizInfo })
  }
  render() {
    return(
      this.state.currentBizInfo
      ?<View>
        {/* Add navigate.goBack button */}
        {/* Business Information Details */}
        <BizHeader bizInfo={this.state.currentBizInfo}/>
        {/* <Text>{this.state.currentBizInfo.name}</Text> */}
        {/* Make Reservation Button */}
        {/* Menu Items bar to toggle different catgeory [Appetizers, Entrees, Desserts, Drinks]*/}
        {/* Expandable list of menu items with name, description/pricing when clicked */}
      </View>
      : <View />
    )
  };
}

const mapStateToProps  = state => ({
  ...state.biz
})
const mapDispatchToProps = dispatch => ({
  findBizByID: bindActionCreators(findBizByID, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(BizInfoPage);
