import React, { Component } from "react";
import firebase from "firebase";

import Card from "./pages/home/Card";
import CountDown from "./pages/home/CountDown";
import Food from "./pages/food/index";
import Member from "./pages/member/index";

import PaymentPic from "./images/payment1.jpg";
import MemberCardPic from "./images/memberCard2.jpg";
import MenuPic from "./images/shabuMenu.jpg";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickFood: false,
      isClickMember: false,
      isClickPayment: false
    };
    var config = {
      apiKey: "AIzaSyAaw33aeg6DZ1sH3dfoW9HwvNP8_obJsyI",
      authDomain: "buffettime-b5571.firebaseapp.com",
      databaseURL: "https://buffettime-b5571.firebaseio.com",
      projectId: "buffettime-b5571",
      storageBucket: "buffettime-b5571.appspot.com",
      messagingSenderId: "1067933645083",
      appId: "1:1067933645083:web:f596f6155608423ed7fbbe",
      measurementId: "G-YN9Z3VQDTN"
    };
    firebase.initializeApp(config);
    firebase.analytics();
  }

  updateClickFood = value => {
    this.setState({ isClickFood: value });
  };
  updateClickMember = value => {
    this.setState({ isClickMember: value });
  };
  removeDb() {
    firebase
      .database()
      .ref("/food")
      .remove();
  }
  componentDidMount() {
    this.removeDb();
  }

  render() {
    return (
      <div>
        <div className="main-page" style={{ backgroundColor: "#DCFFED" }}>
          <div className="container-fluid">
            <CountDown />
          </div>
          <div className="container-fluid mt-4">
            <div className="row justify-content-center">
              <Card
                db={firebase}
                image={MenuPic}
                text="สั่งอาหาร"
                data={this.updateClickFood.bind(this)}
              />
              <Card
                image={MemberCardPic}
                text="สำหรับสมาชิก"
                data={this.updateClickMember.bind(this)}
              />
              <Card image={PaymentPic} text="ชำระเงิน" link="Paymet" />
            </div>
          </div>
          <div
            className="container-fluid"
            style={{ backgroundColor: "#f6fffa" }}
          >
            {this.state.isClickFood === true ? <Food db={firebase} /> : null}
            {this.state.isClickMember === true ? <Member /> : null}
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
