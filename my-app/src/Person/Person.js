import React from "react";
import styled from "styled-components";
//import "./Person.css";

const StyledDiv = styled.div`
  width: 400px;
  margin: 16px auto;
  border: 1px solid wheat;
  box-shadow: 0 2px 3px whitesmoke;
  padding: 16px;
  text-align: center;

  @media (min-width: 700px) {
    width: "650px";
  }
`;

const person = (props) => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} year old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
