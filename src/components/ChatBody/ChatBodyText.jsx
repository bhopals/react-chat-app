import React from 'react'
import PropTypes from 'prop-types'

import ChatMessage from './ChatMessage'

const ChatBodyText = ({ messages }) => {
  return (
    <div className='chat-body-text'>
        { messages.map((message, index) => <ChatMessage key={index} message={message.text} isOwnSentMessage={message.isOwnSentMessage} showArrow={ index === 0 || index === messages.length -1 } />) }
    </div>
  )
}

ChatBodyText.defaultProps = {
  messages: []
}

ChatBodyText.propTypes = {
  messages: PropTypes.array.isRequired
}

export default ChatBodyText;
