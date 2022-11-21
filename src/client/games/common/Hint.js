import {Button, Tooltip} from "antd";
import React from "react";
import {tts} from "../../tts";

const baseSoundsDir = '../../../sounds/'

export const Hint = ({letter, icon, ttTitle, text}) => {
  const audio = new Audio(`${baseSoundsDir}${letter}.mp3`);
  const playLetter = () => {
    if (text) {
      tts(text)
    }
    else {
      audio.play()
    }
  }

  return (
      <div style={{margin: "16px"}}>
        <Tooltip title={ttTitle}>
          <Button style={{border:"0px"}}  shape="circle"
                  icon={icon}
                  onClick={playLetter}/>
        </Tooltip>
      </div>
  )

}