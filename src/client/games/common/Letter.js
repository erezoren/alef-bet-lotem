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
        <Button  size={'large'} onClick={checkLetter} block>
          <h2>{letter}</h2>
        </Button>
        {withSound &&<Button type="primary" shape="circle" size={'small'}
                icon={<SoundOutlined/>} onClick={playLetter}/>}
      </div>

  )
}