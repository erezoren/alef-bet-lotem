import React, {useEffect, useState} from 'react'
import API from "../../API";
import {LetterBoard} from "../common/LetterBoard";
import {Hint} from "../common/Hint";
import confetti from '../../../../images/confeti.gif'
import {getRandomArbitrary} from "../common/utils";
import QuestionCircleOutlined
  from "@ant-design/icons/es/icons/QuestionCircleOutlined";

const baseSoundsDir = '../../../../sounds/common/';
const audioSuccess = new Audio(`${baseSoundsDir}success.mp3`);
const audioFailure = new Audio(`${baseSoundsDir}failure.mp3`);
const NO_DATA = "NO_DATA";

export const AlefBetGame = ({gameId, setWin}) => {

  const [game, setGame] = useState(undefined);
  const [success, setSuccess] = useState(undefined)

  useEffect(() => {
    getGame().then((resp) => setGame(resp)).catch((err) => setGame(undefined));
    return function cancel() {
      setGame(undefined);
    }

  }, [gameId]);

  const getGame = async () => {
    return API.get(
        `/games/${gameId}`,
    )
    .then((response) => {
          if (response.data.game) {
            return response.data.game;
          }
          else {
            return NO_DATA;
          }
        }
    )
    .catch((e) => {
      throw e;
    })

  };

  const randomLetter = () => {
    if (game && game !== NO_DATA && game.images.length > 0) {
      const mediaLocation = game.mediaLocation;
      const letter = game.images[getRandomArbitrary(0, game.images.length - 1)];
      return letter && {
        imagePath: `${mediaLocation}/${letter.image}`,
        letter: letter.letter,
        hint: letter.image.replace(".jpg", "")
      }

    }
  };

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

  let rand = randomLetter();

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
      <div>
        {
          success && <><img style={confettiLeftStyle} src={confetti}/>
            <img style={confettiRightStyle} src={confetti}/></>
        }
        {!success && <div>
          {
            <h1>
              {game ? (game === NO_DATA ? "אין מידע למשחק" : <div>
                        <div style={{display: "inline-flex"}}>
                          <Hint letter={rand.letter} title={rand.hint}
                                icon={<QuestionCircleOutlined size={'small'}/>}
                                ttTitle={'רמז'}/>
                          <img
                              height={"250px"}
                              src={rand.imagePath}/>
                        </div>
                        <div><LetterBoard imageLetter={rand.letter}
                                          onSuccess={onSuccess}
                                          onFailure={onFailure}
                                          withSound={true}
                                          question={'מהי האות הראשונה של מה או מי שבתמונה?'}
                        />

                        </div>
                      </div>

                  )
                  : "טוען....."}

            </h1>

          }

        </div>}

      </div>

  )

};