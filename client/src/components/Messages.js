import React from 'react'
import Message from "./Message"

export default function Messages(props) {

  const messages = props.messages.map(msg => <Message key={msg.timeStamp} message={msg.data} />);

  return (
    <div style={{height:"50vh",overflow:"auto"}}>
      <h2>Last Messages</h2>
      {messages}
    </div>
  )
}