import React, {useEffect} from 'react'
import {Typography} from 'antd';
import lotem from '../../../images/lotem.png'
import '../../style/home.css'

const {Title, Paragraph, Text, Link} = Typography;

export const Welcome = () => {
  useEffect(()=>{
    debugger
    const spans = document.querySelectorAll('.lotem span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
        }, 750 * (idx+1))
    });
  })
  return (
      <div>
        <Title>ברוכים הבאים</Title>
        <div className="lotem">
          <span>ם</span>
          <span>ט</span>
          <span>ו</span>
          <span>ל</span>
          <span>-</span>
          <span>ת</span>
          <span>י</span>
          <span>ב</span>
          <span>-</span>
          <span>ף</span>
          <span>ל</span>
          <span>א</span>
        </div>

        <div style={{fontSize: "40px", dir: "rtl", textAlign: "right"}}>

          <Paragraph>
            באתר זה תמצאו משחקים שכתבתי בכדי לעזור ללוטם בני, שעלה לכיתה א׳
            , בלימוד האלף-בית
            <br/>
            עם הזמן יתווסף תוכן נוסף ומשחקים שונים ברמות שונות
          </Paragraph>
          <img style={{width:"700px"}} src={lotem}/>
        </div>

      </div>

  )

}