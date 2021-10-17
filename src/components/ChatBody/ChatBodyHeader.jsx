import React from 'react'
import PropTypes from 'prop-types'


const ChatBody = ({ user }) => {
  return (
    <div className='chat-body-header'>
        <div className='chat-body-user-profile'>
            <div className='chat-body-avatar'>
                <img src={user.profilePhoto} alt={user.name}/> 
            </div>
            <div className='chat-body-title'>{user.name}</div>
        </div>
        <div className='chat-body-actions'>
            <div data-testid='chat-body-message' className='chat-app-icon message-icon' onClick={() => alert('Please type a message in the input field provided. Once you have entered the text message, kindly press ENTER or CLICK on message icon given next to it to send your message.')}/>
            <div data-testid='chat-body-video' className='chat-app-icon video-icon' onClick={() => alert('Video Call feature is not Supported!!')}/>
            <div data-testid='chat-body-call' className='chat-app-icon call-icon' onClick={() => alert('Phone Call feature is not Supported!!')}/>
        </div>
    </div>
  )
}

ChatBody.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatBody;
