import React from 'react'

export const Score = ({score}) => {

  return (
      <div style={{direction: "rtl",border:"2px solid black"}}>
        <h1>ניקוד כולל</h1>
        <h2>{score}</h2>
      </div>
  )
}