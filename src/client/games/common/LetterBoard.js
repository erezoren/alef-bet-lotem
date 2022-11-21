import React, {useEffect, useState} from 'react'
import {Letter} from "./Letter";
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
    const [status, setStatus] = useState(<p>{question}</p>);

    useEffect(() => {
        if (success !== null) {
            if (success) {
                setSuccess(null)
                onSuccess();
                setStatus(<p>מהי האות?</p>);
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
        <>
            <div className={"question"}>
                {
                    status
                }
            </div>
            <div style={{direction: "rtl", display: "inline-flex"}}>

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
            </div>
        </>
    )

}