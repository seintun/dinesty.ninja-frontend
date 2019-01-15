import React, { Component } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
  fetchCurrentBizMenu
} from '../../actions/MenuAction'

class CurrentBizMenu extends Component {
  async componentDidMount() {
    console.log(this.props.bizID, 'Passed bizID from BizInfoPage to CurrentBizMenu inside component')
    await this.props.fetchCurrentBizMenu(this.props.bizID)
  }
  render() {
    const {
      headerContentStyle,
      headerTextStyle
    } = styles
    console.log(this.props.currentBizMenu, 'Lets check the store')
    return(
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>currentBizMenu is showing up . . . </Text>
      </View>
    )
  };
}

const mapStateToProps  = state => ({
  currentBizMenu: state.menu.currentBizMenu
})
const mapDispatchToProps = dispatch => ({
  fetchCurrentBizMenu: bindActionCreators(fetchCurrentBizMenu, dispatch)
})

const styles = {
  headerContentStyle: {
    flextDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 8
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBizMenu);
