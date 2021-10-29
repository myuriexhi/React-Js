import React from "react";
import "./Useroutput.css";

const useroutput = (props) => {
  return (
    <div className="Useroutput">
      <p>UserName:{props.userName}</p>
      <p>I Hope I'll be overwrriten</p>
    </div>
  );
};

export default useroutput;
