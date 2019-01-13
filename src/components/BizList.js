import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from './common'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
  fetchBiz
} from '../actions/BizAction'

class BizList extends Component {
  render() {
    console.log(this.props)
    return(
      <View>
        <Button onPress={() => this.props.fetchBiz()}>
          Click Me!
        </Button>
      </View>
    )
  };
}

const mapStateToProps  = state => ({
  ...state.bizs
})

const mapDispatchToProps = dispatch => ({
  fetchBiz: () =>  bindActionCreators(fetchBiz, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BizList);
