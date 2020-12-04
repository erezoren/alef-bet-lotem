import React, {useEffect, useState} from 'react'
import {getRandomArbitrary, playFailure, playSuccess} from "../common/utils";
import {Hint} from "../common/Hint";
import QuestionCircleOutlined
  from "@ant-design/icons/es/icons/QuestionCircleOutlined";
import API from "../../API";
import * as constants from "../common/constants";
import {Confetti} from "../common/Confetti";

const baseSoundsDir = '../../../../sounds/common/';
const audioSuccess = new Audio(`${baseSoundsDir}success.mp3`);

const NO_DATA = "NO_DATA";

export const SpellingGame = ({setWin}) => {

  const containerStyle = {
    border: "black solid 1px",
    display: "block"
  }

  const squareStyle = {
    border: "1px solid gray",
    width: "80px",
    height: "80px",
    margin: "10px",
    display: "inline-block",
    verticalAlign: "top",
    fontSize: "30px",
    lineHeight: "80px",
    textAlign: "center",
    dir: "rtl"
  }

  const [randomImage, setRandomImage] = useState(null);
  const [randomWord, setRandomWord] = useState(null);
  const [success, setSuccess] = useState(undefined)

  const [letterRefs, setLetterRefs] = useState([]);

  useEffect(() => {

    getWords().then((resp) => {
      let words = resp.words;
      const randImage = words[getRandomArbitrary(0, words.length - 1)];
      const word = randImage.substr(0, randImage.indexOf("."));
      const refs = [];
      word.split('').map(letter => {
        refs.push(React.createRef());
      })
      setLetterRefs(refs);
      setRandomImage(`${resp.mediaLocation}/${randImage}`)
      setRandomWord(word);
    }).catch((err) => {
      console.error(err)
    });

  }, [success])

  const getWords = async () => {
    return API.get(
        `/games/spelling/`,
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

  const focusNextLetter = (event, idx) => {
    if (constants.lettersArray.includes(event.key)) {
      if (event.key === randomWord[randomWord.length - idx - 1]) {
        setWin(true);
        letterRefs[idx].current.style.color = 'black';
        letterRefs[idx].current.value = event.key;
        if (idx == 0) {
          setSuccess(true);
          playSuccess();

          setTimeout(() => {
            setSuccess(undefined);
          }, 3000)
        }
        try {
          setTimeout(() => {
            letterRefs[idx - 1].current.focus();
          }, 100)
        }
        catch (e) {
          letterRefs[letterRefs.length - 1].current.focus();
        }
      }
      else {
        letterRefs[idx].current.style.color = 'red';
        setWin(false);
        playFailure();
      }
    }
    else {
      debugger
      setTimeout(() => {
        letterRefs[idx].current.value = '';
      }, 100)

    }

  }

  const LetterInput = ({lr, idx}) => {

    return (<input autoFocus maxLength="1" type={'text'} ref={lr}
                   style={squareStyle}
                   onKeyDown={(e) => focusNextLetter(e,
                       idx)}
    ></input>)
  }

  return (
      <>
        {
          success && <Confetti/>
        }

        {!success && randomImage && <div>
          <Hint text={randomWord}
                icon={<QuestionCircleOutlined size={'small'}/>}
                ttTitle={'רמז'}/>
          < img
              height={"250px"}
              src={randomImage}/>
          <div style={containerStyle}>
            {
              letterRefs.map((lr, idx) => {
                return <LetterInput lr={lr} idx={idx}/>
              })

            }
          </div>
          <div style={{fontSize: "25px"}}>
            <h2>נסו להקליד את אותיות המילה שבתמונה</h2>
          </div>
        </div>}
      </>
  )

}