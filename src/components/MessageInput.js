import React from 'react'
import {FormControl} from 'react-bootstrap'

export default function MessageInput(props) {
  return (
    <div>
      <FormControl onKeyDown={props.send} placeholder="Yaz bir şeyler..."/>
    </div>
  )
}