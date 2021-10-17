import React from 'react'
import PropTypes from 'prop-types'


const ChatBody = ({ user }) => {
  return (
    <div className='chat-body-header'>
        <div className='chat-body-user-profile'>
            <div className='chat-body-avatar'>
                <img src={user.profilePhoto} /> 
            </div>
            <div className='chat-body-title'>{user.name}</div>
        </div>
        <div className='chat-body-actions'>
            <div className='chat-app-icon message-icon' />
            <div className='chat-app-icon video-icon' />
            <div className='chat-app-icon call-icon' />
        </div>
    </div>
  )
}

ChatBody.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatBody;
