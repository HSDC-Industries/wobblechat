import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";
import ChatMessage from "./ChatMessage";
const SERVER='http://127.0.0.1:3001' // is 3001 the right port
const NEW_MESSAGE_EVENT = 'new_message-event'

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [anonUserName, setAnonUserName] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const socket = io(SERVER);

  
  useEffect(() => {
    //turns server on,
    socket.on(NEW_MESSAGE_EVENT, message => { // TODO get event name from server
      console.log('connected to the server');
      const incomingMessage = {
        ...message,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });
      
    socket.emit()
    //clean up when component unmounts
    return () => socket.disconnect();
  }, []);

  // var messages = document.getElementById('messages');
  // var form = document.getElementById('form');
  // var input = document.getElementById('input');

  // form.addEventListener('submit', function(e) {
  //   e.preventDefault();
  //   if (input.value) {
  //     socket.emit('chat message', input.value);
  //     input.value = '';
  //   }
  // });

  // socket.on('chat message', function(msg) {
  //   var item = document.createElement('li');
  //   item.textContent = msg;
  //   messages.appendChild(item);
  //   window.scrollTo(0, document.body.scrollHeight);
  // });
  

  return (
    <div className="chat-page">
      <div>
        <input placeholder="choose your username" onChange={e => setAnonUserName(e.target.value )}></input>
      </div>
      {messages !== [] ? <div id="messages">
        {messages.map(x => <ChatMessage key={x.id} time={x.dateCreated} creator={x.creator} content={x.content}/>)};
      </div> : 
      <div className="no-messages">no messages</div>}
      <div className="add-chat-message">
        <input id="input-chat" placeholder="chat message" onChange={e => setNewMessage(e.target.value )}/><button>Send</button>
      </div>
    </div>
  );
}

export default Chat;