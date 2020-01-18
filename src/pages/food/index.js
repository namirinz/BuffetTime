import React, { Component } from "react";
import CardFood from "./CardFood";

class Food extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ paddingTop: "2rem" }}>
        <CardFood slide="1" db={this.props.db} />
        <CardFood slide="2" db={this.props.db} />
      </div>
    );
  }
}
export default Food;
