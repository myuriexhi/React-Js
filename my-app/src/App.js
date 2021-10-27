import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
const App = (props) => {
  const [PersonsState, setPersonsState] = useState({
    persons: [
      { name: "Mayuri", age: 24 },
      { name: "Pratik", age: 25 },
      { name: "Hardik", age: 26 },
    ],
    otherState: "some other value",
  });
  const [otherState, setotherState] = useState("some other value");

  console.log(PersonsState, otherState);

  const switchNameHandler = () => {
    //console.log("was clicked!");
    // DONT DO THIS:this.state.persons[0].name="maahi";
    setPersonsState({
      persons: [
        { name: "Maahi", age: 24 },
        { name: "Pratik", age: 25 },
        { name: "Hardik", age: 29 },
      ],

      otherState: PersonsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>hi, i'm a React App</h1>
      <p>this is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={PersonsState.persons[0].name}
        age={PersonsState.persons[0].age}
      />
      <Person
        name={PersonsState.persons[1].name}
        age={PersonsState.persons[1].age}
      >
        {" "}
        My Hobbies : Racing
      </Person>
      <Person
        name={PersonsState.persons[2].name}
        age={PersonsState.persons[2].age}
      />
    </div>
  );
  //return React.createElement("div", null, "h1", "hi,i'm a react App!!!");
};

export default App;
