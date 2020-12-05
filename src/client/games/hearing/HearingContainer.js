import React from "react";
import {HearingGame} from "./HearingGame";

export const HearingContainer = ({setScore}) => {

  return (
      <HearingGame setWin={(win) => {
        if (win) {
          setScore(s => s + 1);
        } else {
          setScore(s => s - 1)
        }
      }}/>
  )

}