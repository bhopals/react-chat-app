import React from 'react'
import PropTypes from 'prop-types'

import ChatMessage from './ChatMessage'

const ChatBodyText = ({ messages = [] }) => {
  console.log('ChatBody>ChatBodyText>messages>', messages)
  return (
    <div className='chat-body-text'>
        { messages.map((message, index) => <ChatMessage key={index} message={message.text} isReceived={message.isReceived} showArrow={ index === 0 || index === messages.length -1 } />) }
    </div>
  )
}

ChatBodyText.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatBodyText;
