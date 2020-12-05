import confetti from "../../../../images/confeti.gif";
import React from "react";

const confettiLeftStyle = {
  position: "relative",
  width: "1000px",
  display: "flex"
}

const confettiRightStyle = {
  position: "relative",
  width: "1000px",
}

export const Confetti=()=>{

  return (
      <><img style={confettiLeftStyle} src={confetti}/>
        <img style={confettiRightStyle} src={confetti}/></>
  )

}