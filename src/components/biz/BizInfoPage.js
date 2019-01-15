import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BizHeader from './BizHeader'

class BizInfoPage extends Component {
  static navigationOptions = { 
    title: 'BizInfoPage', 
  }
  renderItem(item) {
    return <ListItem item={item} />
  }
  render() {
    const bizID = this.props.navigation.getParam('bizID', 'NO-ID');
    return(
      <View>
        {/* Add navigate.goBack button */}
        {/* Business Information Details */}
        <BizHeader />
        <Text>{bizID}</Text>
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
