import React from "react";

const userinput = (props) => {
  const inputStyle = {
    border: "2px solid red",
  };
  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default userinput;
