import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: true
    };
  }
  render() {
    return (
      <div className="col-auto mb-5">
        <div
          className="card mb-2"
          style={{ width: "17rem", margin: "0 2.5em 0 2.5em" }}
        >
          <img
            onClick={() => {
              this.state.isClick === true
                ? this.setState({ isClick: false })
                : this.setState({ isClick: true });
              this.props.data(this.state.isClick);
            }}
            src={this.props.image}
            className="card-img-top main"
            alt="shabuMenu"
            style={{
              height: "197px",
              transition: "transform .2s",
              cursor: "pointer"
            }}
          />
          <div className="card-body" style={{ padding: "0.7rem" }}>
            <p
              className="card-text"
              style={{
                fontSize: "1.5rem",
                textAlign: "center"
              }}
            >
              {this.props.text}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
