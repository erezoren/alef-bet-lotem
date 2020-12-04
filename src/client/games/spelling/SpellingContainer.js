import React from 'react'
import {SpellingGame} from "./SpellingGame";

export const SpellingContainer = ({setScore}) => {

  return (<SpellingGame setWin={(win) => {
    if (win) {
      setScore(s => s + 1);
    } else {
      setScore(s => s - 1)
    }
  }}/>)
}