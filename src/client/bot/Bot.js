import React, {useRef, useState} from 'react'

// client-side
const io = require("socket.io-client");
const socket = io("http://localhost:8081", {});

export const Bot = () => {
  const inputTextRef = useRef(null);
  const [echo, setEcho] = useState(null)

  socket.on('echo', function (data) {
    const msg = data.msg;
    setEcho(msg);
  });

  socket.on('connect', function () {
    console.log("Connected")
  });

  return (<div>
    <div onInput={() => {
      const msg = inputTextRef.current.value;
      socket.emit('echo', {msg});
    }}>
      <input type={"text"} ref={inputTextRef}/>

    </div>
    <div>{echo}</div>
  </div>)
}