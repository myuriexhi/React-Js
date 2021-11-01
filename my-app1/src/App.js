import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "mmmm", name: "Mayuri", age: 24 },
      { id: "pppp", name: "Pratik", age: 25 },
      { id: "hhhh", name: "Hardik", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
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

  nameChangeHandler = (event, id) => {
    const personsIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personsIndex] };

    //const person = Object.assign({}, this.state.persons[personsIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personsIndex] = person;

    this.setState({ persons: persons });
  };

  deletepersonsHandler = (personsIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletepersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes=['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classes=['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p className={classes.join(" ")}>This Is Really Working!</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

//return React.createElement("div", null, "h1", "hi,i'm a react App!!!");
export default App;
