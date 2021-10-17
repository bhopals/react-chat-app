import React from 'react'
import { useSelector } from 'react-redux';

import './index.css'

const ChatHeader = () => {

  const user = useSelector(state => state.chat.loggedInUser);
  
  return (
    <React.Fragment>
      <div className="chat-header">
         <div className='left'>
              <span className='close' />
              <span className='minimize' />
              <span className='maximize' />
          </div>
          <div className='right'>
              <div className='user-profile'>
                  <div className='user-avatar'><img src={user.profilePhoto} /></div>
                  <div className='user-name'>{user.name}</div>
                  <div className='down-arrow-icon'></div>
              </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default ChatHeader;

