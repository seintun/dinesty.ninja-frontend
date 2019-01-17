import React, { Component } from 'react';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from './MenuItem';
import {
  fetchCurrentBizMenu
} from '../../actions/MenuAction';

class CurrentBizMenu extends Component {
  async componentDidMount() {
    await this.props.fetchCurrentBizMenu(this.props.bizID)
  }
  render() {
    return(
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />} style={{flex:1}}>
          {Object.keys(this.props.currentBizMenu).map(tab => 
            <Tab heading={tab} key={tab}>
              <MenuItem menuItems={this.props.currentBizMenu[tab]}/>
            </Tab>
          )}
        </Tabs>
      </Container>
    )
  };
}

const mapStateToProps  = state => ({
  currentBizMenu: state.menu.currentBizMenu
})
const mapDispatchToProps = dispatch => ({
  fetchCurrentBizMenu: bindActionCreators(fetchCurrentBizMenu, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBizMenu);
