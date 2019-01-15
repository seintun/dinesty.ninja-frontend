import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button } from './common'
import BizPreview from './BizPreview'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
  fetchBiz
} from '../actions/BizAction'

class BizList extends Component {
  state = { }

  async componentDidMount() {
    await this.props.fetchBiz()
    await this.setState({ bizList: this.props.bizList })
  }
  renderBiz() {
    return this.state.bizList.map(biz =>
      <BizPreview key={biz.id} biz={biz} />
    );
  }

  render() {
    return(
      <ScrollView horizontal={true}>
        { this.state.bizList ? this.renderBiz() : null }
      </ScrollView>
    )
  };
}

const mapStateToProps  = state => ({
  ...state.bizList
})
const mapDispatchToProps = dispatch => ({
  fetchBiz: bindActionCreators(fetchBiz, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(BizList);
