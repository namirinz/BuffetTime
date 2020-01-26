import React, { Component } from "react";
import EachCardFood from "./EachCardFood";

import PorkThree from "../../images/pork3.jpg";
import Pork from "../../images/pork.jpg";
import Meat from "../../images/meat.jpg";
import MeatThree from "../../images/meat3.jpg";

import Cabbage from "../../images/cabbage.jpg";
import Lettuce from "../../images/lettuce.jpg";
import Udon from "../../images/udon.jpg";
import Rice from "../../images/rice.jpg";

class SliceCard extends Component {
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
              <EachCardFood
                img={this.state.first.img}
                text={this.state.first.text}
                db={this.props.db}
              />
              <EachCardFood
                img={this.state.second.img}
                text={this.state.second.text}
                db={this.props.db}
              />
              <EachCardFood
                img={this.state.third.img}
                text={this.state.third.text}
                db={this.props.db}
              />
              <EachCardFood
                img={this.state.fourth.img}
                text={this.state.fourth.text}
                db={this.props.db}
              />
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
export default SliceCard;
