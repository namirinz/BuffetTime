import React, { Component } from "react";
import SliceCard from "./SliceCard";

class Food extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ paddingTop: "2rem" }}>
        <SliceCard slide="1" db={this.props.db} />
        <SliceCard slide="2" db={this.props.db} />
      </div>
    );
  }
}
export default Food;
