import React, {useState,useEffect} from 'react'
import Header from "./Header"
import Messages from './Messages';
import MessageInput from './MessageInput';
import { connect, sendMessage } from '../api/api';

export default function Chat() {

  const [messages, setMessages] = useState([])

  useEffect(()=>{
    connect((msg)=>{
      setMessages(prevState =>([...prevState,msg]));
    })
  })

  function send(event) {
    if (event.keyCode === 13) {
      sendMessage(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <div style={{padding:"20px"}}>
      <Header/>
      <MessageInput send={send} />
      <br/>
      <Messages messages={messages} />
    </div>
  )
}