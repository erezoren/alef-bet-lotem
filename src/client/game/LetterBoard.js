import React, {useEffect, useState} from 'react'
import {Letter} from "./Letter";
import {Space} from "antd";




const letters = "אבגדהוזחטיכלמנסעפצקרשתםןץף".split('');
export const LetterBoard = ({imageLetter, onSuccess,onFailure}) => {
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

            letters.map((letter) => {
                  return <Letter letter={letter} checkLetter={() => {
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