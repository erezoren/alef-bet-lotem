import React, {useEffect} from 'react'
import {Typography} from 'antd';
import lotem from '../../../images/lotem.png'
import '../../style/home.css'

const {Title, Paragraph, Text, Link} = Typography;

export const Welcome = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.lotem span');
    spans.forEach((span, idx) => {
      console.log(span.innerHTML)
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });

      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750*idx)
    });
  })
  return (
      <div>
        <Title>ברוכים הבאים</Title>
        <div className="lotem">
          <span>א</span>
          <span>ל</span>
          <span>ף</span>
          <span>-</span>
          <span>ב</span>
          <span>י</span>
          <span>ת</span>
          <span>-</span>
          <span>ל</span>
          <span>ו</span>
          <span>ט</span>
          <span>ם</span>
        </div>

        <div className={"greeting"}>
          <Paragraph>
            באתר זה תמצאו משחקים שכתבתי בכדי לעזור ללוטם בני, שעלה לכיתה א׳
            , בלימוד האלף-בית
            <br/>
            עם הזמן יתווסף תוכן נוסף ומשחקים שונים ברמות שונות
          </Paragraph>
          <img style={{width: "40%", zIndex: "10", position: "relative"}}
               src={lotem}/>
        </div>

      </div>

  )

}