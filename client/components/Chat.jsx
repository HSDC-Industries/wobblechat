import React, { useState, useRef, useEffect } from 'react';
import { io } from "socket.io-client";
import ChatMessage from "./ChatMessage";
const SERVER='http://localhost:3001'; // is 3001 the right port
const NEW_MESSAGE_EVENT = 'new_message-event';
import useChatRoom from './useChatRoom'


const Chat = () => {
  const { messages, sendMessage } = useChatRoom();
  const [newMessage, setNewMessage] = useState("");
  const [time, setTime] = useState('');
  // const classes = useStyles();
  const messageRef = useRef()

  const handleNewMessageChange = event => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const today = new Date();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();
    if (hours < 10) hours = `0${hours}`;
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;
    const time = `${hours}:${mins}:${secs} `;
    setTime(time);
    if (newMessage !== "") {
      sendMessage(newMessage);
      setNewMessage("");
    }
    
  };

  // extra code to send the message as you press the enter key.
  const handleKeyUp = event => {
    if (event.key === "Enter"){
      if (newMessage !== "") {
        sendMessage(newMessage);
        setNewMessage("");
      }
    }
  }

  // allow scrolling to the bottom of the container when a new message arrived.
  useEffect(() => messageRef.current.scrollIntoView({behavior: "smooth"}))

  return (
    <div className = "chat-main-div">
      <h2>WobbleChat</h2>
      <div className = "chat-box">
        <div className = "chat-list" >
          <ul>{messages.map((message, i) => (
              <li key={i}>
              <span id = 'time'>{time}</span>
               {message.body}
              </li>
            ))}</ul>
          <div ref={messageRef}></div>
        </div>
          <div className="chat-input">
          <input
            id="message"
            label="Message"
            placeholder="enter message here"
            variant="outlined"
            value={newMessage}
            onChange={handleNewMessageChange}
            onKeyUp={handleKeyUp}
          />
          <button
            disabled={!newMessage}
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
          >
            Send
          </button>
          </div>
      </div>
    </div>
  );
};


export default Chat;