import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
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
    await this.setState({ bizList: this.shuffle(this.props.bizList) })
  }
  // Shuffle the list of biz
  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  renderBiz() {
    return this.state.bizList.map(biz =>
      <BizPreview key={biz.id} biz={biz} />
    );
  }

  render() {
    const {
      headerContentStyle,
      headerTextStyle
    } = styles
    return(
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>Popular Restaurants near you</Text>
        <ScrollView horizontal={true}>
          { this.state.bizList ? this.renderBiz() : null }
        </ScrollView>
      </View>
    )
  };
}

const mapStateToProps  = state => ({
  ...state.bizList
})
const mapDispatchToProps = dispatch => ({
  fetchBiz: bindActionCreators(fetchBiz, dispatch)
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
export default connect(mapStateToProps, mapDispatchToProps)(BizList);
