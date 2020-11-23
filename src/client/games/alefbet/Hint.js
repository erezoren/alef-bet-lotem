import {Button} from "antd";
import React from "react";
import QuestionCircleOutlined
  from "@ant-design/icons/es/icons/QuestionCircleOutlined";

const baseSoundsDir = '../../../sounds/'

export const Hint = ({letter}) => {
  const audio = new Audio(`${baseSoundsDir}${letter}.mp3`);
  const playLetter = () => {
    audio.play()
  }

  return (
      <Button shape="circle"
              icon={<QuestionCircleOutlined size={'small'}/>}
              onClick={playLetter}/>
  )

}