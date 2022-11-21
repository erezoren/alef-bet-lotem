import {useState} from "react";
import {Topics} from "./Topics";
import {Divider} from "antd";
import {AlefBetGame} from "./AlefBetGame";
import React from "react";

export const AlefBetContainer=({setScore})=>{
  const [gameId, setGameId] = useState(null);


  return(
      <div>
        <div>
          <Topics setGameId={setGameId}/>
        </div>
        {gameId && <AlefBetGame setWin={(win) => {
          if (win) {
            setScore(s => s + 1);
          } else {
            setScore(s => s - 1)
          }
        }} gameId={gameId}/>}
      </div>
  )
}