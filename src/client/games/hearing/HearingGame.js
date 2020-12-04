import {LetterBoard} from "../common/LetterBoard";
import React, {useEffect, useState} from "react";
import {Hint} from "../common/Hint";
import * as constants from "../common/constants";
import {getRandomArbitrary, playFailure, playSuccess} from "../common/utils";
import PlayCircleTwoTone from "@ant-design/icons/es/icons/PlayCircleTwoTone";
import {Confetti} from "../common/Confetti";

export const HearingGame = ({setWin}) => {
  const [success, setSuccess] = useState(undefined)
  const [randLetter, setRandLatter] = useState(undefined);

  useEffect(() => {
    setRandLatter(randomLetter())
  },[success]);

  const onSuccess = () => {
    setWin(true);
    setSuccess(true);
    playSuccess()

    setTimeout(() => {
      setSuccess(undefined);
    }, 3000)
  }

  const onFailure = () => {
    setWin(false);
    setSuccess(false);
    playFailure();
  }

  const randomLetter = () => {
    return constants.lettersArray[getRandomArbitrary(0,
        constants.lettersArray.length - 1)];
  };

  return (
      <>
        {
          success && <Confetti/>
        }
        {!success && randLetter &&
        <>
          <p style={{fontSize: "50px", color: "green"}}>לחצ/י כאן כדי לשמוע
            אות</p>
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