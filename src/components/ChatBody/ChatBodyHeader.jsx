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
            <div className='body-icon message' />
            <div className='body-icon video' />
            <div className='body-icon call' />
        </div>
    </div>
  )
}

ChatBody.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatBody;
