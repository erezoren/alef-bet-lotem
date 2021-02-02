import React from 'react'
import Sender from "./Sender";
import Messages from "./Messages";
import '../../style/chat.css'

export default function Chat(props) {

  return (
      <div className={'chat-main'}>
        <div className={'chat-inner-part chat-sender'}>
          <Sender/>
        </div>
        <div className={'chat-inner-part chat-messages'}>
          <Messages/>
        </div>
      </div>
  )

}