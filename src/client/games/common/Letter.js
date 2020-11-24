import React from 'react'
import {Button} from "antd";
import SoundOutlined from "@ant-design/icons/es/icons/SoundOutlined";
const baseSoundsDir='../../../sounds/'
export const Letter = ({letter, checkLetter,withSound}) => {

  const audio = new Audio(`${baseSoundsDir}${letter}.mp3`);
  const playLetter = () => {
    audio.play()
  }

  return (
      <div>
        <Button type="primary" size={'large'} onClick={checkLetter} block>
          <h3>{letter}</h3>
        </Button>
        {withSound &&<Button type="primary" shape="circle" size={'small'}
                icon={<SoundOutlined/>} onClick={playLetter}/>}
      </div>

  )
}