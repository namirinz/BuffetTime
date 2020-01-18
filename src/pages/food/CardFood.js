import React, { Component } from "react";

import PorkThree from "../../images/pork3.jpg";
import Pork from "../../images/pork.jpg";
import Meat from "../../images/meat.jpg";
import MeatThree from "../../images/meat3.jpg";

import Cabbage from "../../images/cabbage.jpg";
import Lettuce from "../../images/lettuce.jpg";
import Udon from "../../images/udon.jpg";
import Rice from "../../images/rice.jpg";

class CardFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: { img: PorkThree, text: "เนื้อหมูสามชั้น" },
      second: { img: Pork, text: "เนื้อหมูสไลด์" },
      third: { img: Meat, text: "เนื้อวัว" },
      fourth: { img: MeatThree, text: "เนื้อวัวสามชั้น" }
    };
    this.dbRef = this.props.db.database().ref("/food");
  }
  componentWillMount() {
    if (this.props.slide === "2") {
      this.setState({
        first: { img: Cabbage, text: "กะหล่ำปลีฝอย" },
        second: { img: Lettuce, text: "ผักกาดขาว" },
        third: { img: Udon, text: "เส้นอุด้ง" },
        fourth: { img: Rice, text: "ข้าวผัดกระเทียม" }
      });
    }
    this.dbRef.remove();
  }

  onClickF(messages) {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    this.dbRef.push({
      food: messages,
      time: dateTime
    });
  }
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-auto mb-4">
                <div className="card mb-2" style={{ width: "12rem" }}>
                  <img
                    src={this.state.first.img}
                    className="card-image-top"
                    style={{ height: "150px" }}
                  />
                  <div className="card-body">
                    <p className="card-text">{this.state.first.text}</p>
                    <button
                      onClick={() => this.onClickF(this.state.first.text)}
                      type="button"
                      class="btn btn-outline-success justify-content-center"
                    >
                      สั่งอาหาร
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-auto mb-4">
                <div className="card mb-2" style={{ width: "12rem" }}>
                  <img
                    src={this.state.second.img}
                    className="card-image-top"
                    style={{ height: "150px" }}
                  />
                  <div className="card-body">
                    <p className="card-text">{this.state.second.text}</p>
                    <button
                      onClick={() => this.onClickF(this.state.second.text)}
                      type="button"
                      class="btn btn-outline-success"
                    >
                      สั่งอาหาร
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-auto mb-4">
                <div className="card mb-2" style={{ width: "12rem" }}>
                  <img
                    src={this.state.third.img}
                    className="card-image-top"
                    style={{ height: "150px" }}
                  />
                  <div className="card-body">
                    <p className="card-text">{this.state.third.text}</p>
                    <button
                      onClick={() => this.onClickF(this.state.third.text)}
                      type="button"
                      class="btn btn-outline-success"
                    >
                      สั่งอาหาร
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-auto mb-4">
                <div className="card mb-2" style={{ width: "12rem" }}>
                  <img
                    src={this.state.fourth.img}
                    className="card-image-top"
                    style={{ height: "150px" }}
                  />
                  <div className="card-body">
                    <p className="card-text">{this.state.fourth.text}</p>
                    <button
                      onClick={() => this.onClickF(this.state.fourth.text)}
                      type="button"
                      class="btn btn-outline-success"
                    >
                      สั่งอาหาร
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left fa-lg text-muted"></i>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next text-faded"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-chevron-right fa-lg text-muted"></i>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default CardFood;
