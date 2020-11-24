import React, {useEffect, useState} from 'react'
import {Letter} from "./Letter";
import {Space} from "antd";
import * as constants from "./constants";

export const LetterBoard = ({imageLetter, onSuccess, onFailure, withSound}) => {
  const [success, setSuccess] = useState(null);
  const [letter, setLetter] = useState(null);
  const [status, setStatus] = useState(<h2>מהי האות?</h2>);

  useEffect(() => {
    if (success !== null) {
      if (success) {
        setSuccess(null)
        onSuccess();
        setStatus(<h2>מהי האות?</h2>);
      }
      else {
        onFailure();
        setStatus(<div style={{display: "inline-block"}}>
          <h2
              style={{color: "red"}}>נסה שוב</h2>
        </div>)
      }
    }

  }, [success, letter])

  return (
      <div style={{direction: "rtl"}}>
        <Space>
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
        <div>
          {
            status
          }
        </div>
      </div>
  )

}