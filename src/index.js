import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

class AppWithRouter extends Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<AppWithRouter />, document.querySelector("#root"));
serviceWorker.unregister();
