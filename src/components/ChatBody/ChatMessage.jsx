import React from 'react'
import PropTypes from 'prop-types'


const ChatMessage = ({ message, index, showArrow }) => {
  // console.log('ChatMessage>message>', message)
  // console.log('ChatMessage>showArrow>', showArrow)

  return (
    <div className={`chat-body-message ${Math.random() < 0.5 ? ( showArrow ? 'dark arrow-top ' : 'dark ') : (showArrow ? 'light arrow-bottom  ' :'light ')}`}>
        {message}
    </div>
  )
}

ChatMessage.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatMessage;
