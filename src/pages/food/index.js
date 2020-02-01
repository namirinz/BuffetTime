import React, { Component } from "react";
import SliceCard from "./SliceCard";
class Food extends Component {
  render() {
    return (
      <div>
        <SliceCard db={this.props.db} />
        <SliceCard db={this.props.db} />
      </div>
    );
  }
}
export default Food;
