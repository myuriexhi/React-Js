import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Mayuri", age: 24 },
      { name: "Pratik", age: 25 },
      { name: "Hardik", age: 26 },
    ],
    otherState: "some other value",
  };

  //console.log(PersonsState, otherState);

  switchNameHandler = (newName) => {
    //console.log("was clicked!");
    // DONT DO THIS:this.state.persons[0].name="maahi";
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: "Pratik", age: 25 },
        { name: "Hardik", age: 29 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "mayuri", age: 24 },
        { name: event.target.value, age: 25 },
        { name: "Hardik", age: 29 },
      ],
    });
  };

  render() {
    const style = {
      backgroundcolor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>hi, i'm a React App</h1>
        <p>this is really working!</p>
        <button style={style} onClick={this.switchNameHandler("partik!!")}>
          Switch Name
        </button>
        <Person
          name={this.State.persons[0].name}
          age={this.State.persons[0].age}
        />
        <Person
          name={this.State.persons[1].name}
          age={this.State.persons[1].age}
          click={this.switchNameHandler.bind(this, "mayuri")}
          changed={this.nameChangeHandler}
        >
          My Hobbies : Racing
        </Person>
        <Person
          name={this.State.persons[2].name}
          age={this.State.persons[2].age}
        />
      </div>
    );
  }
}

//return React.createElement("div", null, "h1", "hi,i'm a react App!!!");
export default App;
