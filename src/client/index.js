import React, { Component } from "react";
import ReactDOM from "react-dom";
import { stringify } from "querystring";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    console.log("componentDidMount");

    fetch("/api/hello")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .catch(error => console.error("Error: ", error))
      .then(response => {
        console.log(response);
        this.setState({ response });
      });
  }

  render() {
    const message = <div>Hello from React.</div>;

    console.log(this.state.response);
    const remoteMessage = <div> {this.state.response.express} </div>;

    return (
      <div>
        {" "}
        {message} {remoteMessage}
      </div>
    );
    //return <div> Hi </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
