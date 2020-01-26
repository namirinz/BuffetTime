import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EachCardFood extends Component {
  constructor(props) {
    super(props);
    toast.configure();
    this.dbRef = this.props.db.database().ref("/food");
    toast.configure({ draggable: false, autoClose: false });
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

  notifyA(messages) {
    toast.success(`คุณได้ทำการสั่ง ${messages}`);
  }

  render() {
    return (
      <div>
        <div className="col-auto mb-4">
          <div className="card mb-2" style={{ width: "12rem" }}>
            <img
              src={this.props.img}
              className="card-image-top"
              style={{ height: "150px" }}
            />
            <div className="card-body">
              <p className="card-text">{this.props.text}</p>
              <button
                onClick={() => {
                  this.onClickF(this.props.text);
                  this.notifyA(this.props.text);
                }}
                type="button"
                class="btn btn-outline-success justify-content-center"
              >
                สั่งอาหาร
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EachCardFood;
