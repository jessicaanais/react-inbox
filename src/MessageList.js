import React from 'react';
import Message from './Message'

const MessageList = (props) => {
  console.log(props)
  let manyMessages = props.loadMessages.map((message) => <Message key={message.id} message={ message } />)
  return (
    <div className="container">
      { manyMessages }
      </div>
  )
}

export default MessageList
