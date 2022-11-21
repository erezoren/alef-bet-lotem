import React, {useEffect, useState} from 'react'
import {Letter} from "./Letter";
import {Space} from "antd";
import * as constants from "./constants";

export const LetterBoard = ({
  imageLetter,
  onSuccess,
  onFailure,
  withSound,
  question
}) => {
  const [success, setSuccess] = useState(null);
  const [letter, setLetter] = useState(null);
  const [status, setStatus] = useState(<h4>{question}</h4>);

  useEffect(() => {
    if (success !== null) {
      if (success) {
        setSuccess(null)
        onSuccess();
        setStatus(<h4>מהי האות?</h4>);
      } else {
        onFailure();
        setStatus(<div style={{display: "inline-block"}}>
          <h4
              style={{color: "red"}}>נסה שוב</h4>
        </div>)
      }
    }

  }, [success, letter])

  return (
      <div style={{direction: "rtl"}}>
        <Space size={"small"}>
          {

            constants.lettersArray.map((letter) => {
                  return <Letter letter={letter} withSound={withSound}
                                 checkLetter={() => {
                                   setSuccess(imageLetter === letter)
                                   setLetter(letter)
                                 }

                                 }/>
                }
            )
          }

        </Space>
        <div className={"question"}>
          {
            status
          }
        </div>
      </div>
  )

}