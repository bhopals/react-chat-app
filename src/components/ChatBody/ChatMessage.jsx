import React from 'react'
import PropTypes from 'prop-types'


const ChatMessage = ({ message, showArrow, isOwnSentMessage }) => {
  return (
    <div className={`chat-body-message ${ isOwnSentMessage ? ( showArrow ? 'dark arrow-top ' : 'dark ') : (showArrow ? 'light arrow-bottom  ' :'light ')}`}>
        {message}
    </div>
  )
}

ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
  showArrow: PropTypes.bool.isRequired,
  isOwnSentMessage: PropTypes.bool.isRequired
}

export default ChatMessage;
