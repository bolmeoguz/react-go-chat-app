import React from 'react'

export default function Message(props) {

  let message = JSON.parse(props.message);

  return (
    <div>
      <strong>{message.sender}</strong> {message.body}
    </div>
  )
}