import React, { Component } from 'react';
import { Container, Card, CardItem, Icon, Text, Button } from 'native-base'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BizHeader from './BizHeader'
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
  render() {
    return !this.props.currentBizInfo.name ? null : (
      <Container>
        <BizHeader bizInfo={this.props.currentBizInfo} />
        <CardItem>
          <Button style={{flex: 1}}>
            <Text>Make Reservation</Text>
          </Button>
        </CardItem>
        <CurrentBizMenu bizID={this.props.navigation.state.params.bizID}/>
      </Container>
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
