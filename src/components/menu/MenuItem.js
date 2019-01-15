import React, { Component } from "react";
import { Container, Content, Accordion } from "native-base";

export default class MenuItem extends Component {
  state = { items: [] }
  componentDidMount() {
    this.setState({ items: this.props.menuItems.map(item => {
      return {
        title: item.name,
        content: item.description
      }
    })})
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Accordion
            dataArray={this.state.items}
            headerStyle={{ backgroundColor: "orange" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
        </Content>
      </Container>
    );
  }
}