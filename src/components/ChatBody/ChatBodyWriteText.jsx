import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { EMPTY, ENTER } from '../../constants';

const ChatBodyWriteText = ({ onMessageSend }) => {
  console.log('ChatBodyWriteText>START>')


  const [searchText, setSearchText] = useState(EMPTY)
  
  const onKeyDownHandler = (e) => {
    if (e.key === ENTER) {
      console.log('ChatBodyWriteText>searchText>', searchText)
      onMessageSend(searchText)
      setSearchText(EMPTY)
      e.preventDefault()
    } 
  }

  return (
    <div className='chat-body-write-text'>
        <div className='chat-body-write-text-area'>
          <textarea value={searchText} placeholder='Write a message...' onChange={(e) => setSearchText(e.target.value)} onKeyDown={onKeyDownHandler} />
        </div>
        <div className='chat-body-write-text-buttons'>
            <div className='body-icon microphone' />
            <div className='body-icon write-message' />
        </div>
    </div>
  )
}

ChatBodyWriteText.propTypes = {
  onMessageSend: PropTypes.func.isRequired
}

export default ChatBodyWriteText;

