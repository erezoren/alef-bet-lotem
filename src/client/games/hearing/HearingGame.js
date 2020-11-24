import {LetterBoard} from "../common/LetterBoard";
import React, {useEffect, useState} from "react";
import confetti from "../../../../images/confeti.gif";
import {Hint} from "../common/Hint";
import * as constants from "../common/constants";
import {getRandomArbitrary} from "../common/utils";
import PlayCircleTwoTone from "@ant-design/icons/es/icons/PlayCircleTwoTone";

const baseSoundsDir = '../../../../sounds/common/';
const audioSuccess = new Audio(`${baseSoundsDir}success.mp3`);
const audioFailure = new Audio(`${baseSoundsDir}failure.mp3`);
const NO_DATA = "NO_DATA";

export const HearingGame = ({setWin}) => {
  const [success, setSuccess] = useState(undefined)
  const [randLetter, setRandLatter] = useState(undefined);

  useEffect(() => {
    setRandLatter(randomLetter())
  });

  const onSuccess = () => {
    setWin(true);
    setSuccess(true);
    audioSuccess.play();

    setTimeout(() => {
      setSuccess(undefined);
    }, 3000)
  }

  const onFailure = () => {
    setWin(false);
    setSuccess(false);
    audioFailure.play();
  }

  const randomLetter = () => {
    return constants.lettersArray[getRandomArbitrary(0,
        constants.lettersArray.length - 1)];
  };

  const confettiLeftStyle = {
    position: "relative",
    width: "1000px",
    display: "flex"
  }

  const confettiRightStyle = {
    position: "relative",
    width: "1000px",
  }

  return (
      <>
        {
          success && <><img style={confettiLeftStyle} src={confetti}/>
            <img style={confettiRightStyle} src={confetti}/></>
        }
        {!success && randLetter &&
        <>
          <p style={{fontSize: "50px",color:"green"}}>לחצ/י כאן כדי לשמוע אות</p>
          <Hint letter={randLetter}
                icon={<PlayCircleTwoTone style={{fontSize: "90px"}}/>}
                ttTitle={'לחצֿ/י לשמיעת האות'}/>
          <LetterBoard imageLetter={randLetter}
                       onSuccess={onSuccess}
                       onFailure={onFailure}
                       withSound={false}
                       question={'מהי האות אותה שמענו?'}
          /></>}
      </>
  )

}