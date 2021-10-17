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
            <div data-testid='chat-body-message' className='chat-app-icon message-icon' onClick={() => alert('Type a message to a user and press ENTER or Message Icon to send a message ')}/>
            <div data-testid='chat-body-video' className='chat-app-icon video-icon' onClick={() => alert('Making a Video Call to a user from the App is not Supported!!')}/>
            <div data-testid='chat-body-call' className='chat-app-icon call-icon' onClick={() => alert('Making a Phone Call to a user from the App is not Supported!!')}/>
        </div>
    </div>
  )
}

ChatBody.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatBody;
