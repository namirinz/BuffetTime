import React, { Component } from "react";

class CountDown extends Component {
  state = {
    test: "hello",
    hours: 1,
    minutes: 30,
    seconds: 0,
    isDisabled: false
  };
  constructor(props) {
    super(props);
    this.myInterval = this.myInterval.bind(this);
  }
  myInterval = () => {
    this.setState({ isDisabled: true });

    setInterval(() => {
      const { seconds, minutes, hours } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      } else {
        if (minutes > 0) {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        } else {
          if (hours > 0) {
            this.setState(({ hours }) => ({
              hours: hours - 1,
              minutes: 59
            }));
          } else {
            alert("Time Out!");
            clearInterval(this.myInterval);
          }
        }
      }
    }, 1000);
  };

  render() {
    const { hours, minutes, seconds, isDisabled } = this.state;
    return (
      <div
        className="time-container"
        style={{ margin: "0em 0 3em 0", paddingTop: "3em" }}
      >
        <div
          className="time"
          style={{
            textAlign: "center",
            font: "140px bold",
            fontFamily: "Merriweather"
          }}
        >
          <p>
            {`0${hours}`}:{minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </div>
        <div
          className="button-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isDisabled}
            onClick={this.myInterval}
            style={{ fontSize: "1.5rem", marginTop: "1rem" }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default CountDown;
