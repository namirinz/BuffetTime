import React, { Component } from "react";

import MemberCard from "../../images/membercard_page.png";

class Member extends Component {
  state = {
    name: "Nath Prachayakul",
    exp_date: "02/23",
    point: "279",
    id: "1998071192494"
  };
  render() {
    return (
      <div className="conatiner" style={{ padding: "2rem 0" }}>
        <div className="row">
          <div
            className="col-6"
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "2rem",
              marginRight: "-2rem"
            }}
          >
            <img src={MemberCard} style={{ height: "250px" }}></img>
          </div>
          <div className="col" style={{ marginTop: "1rem" }}>
            <div
              className="member-text"
              style={{ fontFamily: "Kanit", fontSize: "1.5rem" }}
            >
              <p>Name : {this.state.name}</p>
              <p>EXP Date : {this.state.exp_date}</p>
              <p>
                Point : {this.state.point} Next class :{" "}
                {2500 - this.state.point}
              </p>
              <p>Ref Id : {this.state.id}</p>
            </div>
          </div>

          <div className="w-100"></div>
        </div>
      </div>
    );
  }
}
export default Member;
