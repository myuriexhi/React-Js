import React, { Component } from "react";
import "./App.css";

import Userinput from "./Userinput/Userinput";
import Userouput from "./Useroutput/Useroutput";

class App extends Component {
  state = {
    userName: "maahi",
  };

  userNameChangeHandler = (event) => {
    this.setState({ userName: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <Userinput
          changed={this.userNameChangeHandler}
          currentName={this.state.userName}
        />

        <Userouput userName={this.state.userName} />
        <Userouput userName={this.state.userName} />
        <Userouput userName="mayuri" />
      </div>
    );
  }
}

export default App;
