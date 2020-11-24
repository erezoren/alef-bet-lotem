import {Button, Tooltip} from "antd";
import React from "react";

const baseSoundsDir = '../../../sounds/'

export const Hint = ({letter, icon,ttTitle}) => {
  const audio = new Audio(`${baseSoundsDir}${letter}.mp3`);
  const playLetter = () => {
    audio.play()
  }

  return (
      <div style={{margin: "16px"}}>
        <Tooltip title={ttTitle}>
          <Button shape="circle"
                  icon={icon}
                  onClick={playLetter}/>
        </Tooltip>
      </div>
  )

}