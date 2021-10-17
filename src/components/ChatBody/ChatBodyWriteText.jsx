import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { CLICK, EMPTY, ENTER } from '../../constants';

const ChatBodyWriteText = ({ onDispatchHandler }) => {

  const [searchText, setSearchText] = useState(EMPTY)
  
  const isValidTextToSend = (text, key) => text && text.trim().length !== 0 && (key === ENTER || key === CLICK)

  const onKeyDownHandler = (e) => {
    if (isValidTextToSend(searchText, e.key)) {
      onDispatchHandler(searchText.trim())
      setSearchText(EMPTY)
      e.preventDefault()
    } 
  }

  const onMessageSendHandler = () => {
    if (isValidTextToSend(searchText, CLICK)) {
      onDispatchHandler(searchText.trim())
      setSearchText(EMPTY)
    } 
  }

  return (
    <div className='chat-body-write-text'>
        <div className='chat-body-write-text-area'>
          <textarea data-testid='chat-message-id' value={searchText} placeholder='Write a message...' onChange={(e) => setSearchText(e.target.value)} onKeyDown={onKeyDownHandler} />
        </div>
        <div className='chat-body-write-text-buttons'>
            <div data-testid='chat-message-send-id'  className='chat-app-icon write-message-icon' onClick={onMessageSendHandler} />
            <div className='chat-app-icon microphone-icon' onClick={() => alert('Sending an audio to participants is not Supported!!')} />
        </div>
    </div>
  )
}

ChatBodyWriteText.propTypes = {
  onDispatchHandler: PropTypes.func.isRequired
}

export default ChatBodyWriteText;


