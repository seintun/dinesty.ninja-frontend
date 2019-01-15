import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BizHeader from './BizHeader'

class BizInfoPage extends Component {
  render() {
    return(
      <View>
        {/* Add navigate.goBack button */}
        {/* Business Information Details */}
        <BizHeader />
        {/* Make Reservation Button */}
        {/* Menu Items bar to toggle different catgeory [Appetizers, Entrees, Desserts, Drinks]*/}
        {/* Expandable list of menu items with name, description/pricing when clicked */}
      </View>
    )
  };
}

const mapStateToProps  = state => ({

})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(BizInfoPage);
