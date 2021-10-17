import React from 'react'

import ChatBody from './../ChatBody'
import ChatHeader from './../ChatHeader'
import ChatSideBar from './../ChatSideBar'

import './index.css'

export default function ChatAppContainer () {
  return (
    <React.Fragment>
      <div className='chat-app-container'>
          <div className='header-container'>
            <ChatHeader />
          </div>
          <div className='body-container'>
            <div className='panel left-panel'>
              <ChatSideBar />
            </div>
            <div className='panel right-panel'>
              <ChatBody />
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
