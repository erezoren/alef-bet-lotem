import React, {useEffect, useState} from 'react'
import {getRandomArbitrary} from "../common/utils";

export const SpellingGame = () => {

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
  const [letterRefs, setLetterRefs] = useState([]);

  useEffect(() => {
    const spellingResponse = {mediaLocation: '', words: ['בבב.jpg', 'אאא.jpg']}
    let words = spellingResponse.words;
    const randImage = words[getRandomArbitrary(0, words.length - 1)];
    const word = randImage.substr(0, randImage.indexOf("."));
    const refs = [];
    word.split('').map(letter => {
      refs.push(React.createRef());
    })
    setLetterRefs(refs);
    setRandomImage(`${spellingResponse.mediaLocation}/${randImage}`)
  }, [])

  const focusNextLetter = (event, idx) => {

    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97
        && event.keyCode <= 122)) {
      letterRefs[idx].current.value = event.key;

      try {
        letterRefs[idx - 1].current.focus();
      }
      catch (e) {
        letterRefs[letterRefs.length - 1].current.focus();
      }
    }

  }

  return (
      <>
        {randomImage && <div>
          <img
              height={"250px"}
              src={randomImage}/>
          <div style={containerStyle}>
            {
              letterRefs.map((lr, idx) => {
                return <input autofocus maxLength="1" type={'text'} ref={lr}
                              style={squareStyle}
                              onKeyDown={(e) => focusNextLetter(e,
                                  idx)}
                ></input>
              })

            }
          </div>
        </div>}
      </>
  )

}