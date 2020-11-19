import React, {useEffect, useState} from 'react'
import API from "../API";
import {LetterBoard} from "./LetterBoard";
import {Score} from "../home/Score";
import QuestionCircleOutlined
  from "@ant-design/icons/es/icons/QuestionCircleOutlined";
import {Tooltip} from "antd";
const baseSoundsDir = '../../../sounds/common/'
const audioSuccess = new Audio(`${baseSoundsDir}success.mp3`);
const audioFailure = new Audio(`${baseSoundsDir}failure.mp3`);
const NO_DATA = "NO_DATA";

export const Game = ({gameId}) => {

  const [game, setGame] = useState(undefined);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getGame().then((resp) => setGame(resp)).catch((err) => setGame(undefined));
    return function cancel() {
      setGame(undefined);
    }

  }, [gameId])

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

  }

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
  }

  const getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }

  let rand = randomLetter();
  return (
      <div>
        <div>
          {
            <h1>
              {game ? (game === NO_DATA ? "אין מידע למשחק" : <div>
                        <img
                          height={"250px"}
                          src={rand.imagePath}/>
                        <div><LetterBoard imageLetter={rand.letter}
                                          onSuccess={() => {
                                            setScore(score + 1);
                                            audioSuccess.play();
                                          }}
                                          onFailure={() => {
                                            setScore(score - 1);
                                            audioFailure.play()
                                          }}
                        />
                          <Tooltip title={rand.hint}>
                            <QuestionCircleOutlined/>
                          </Tooltip>

                        </div>
                      </div>

                  )
                  : "טוען....."}
              <Score score={score}/>
            </h1>

          }

        </div>

      </div>

  )

}