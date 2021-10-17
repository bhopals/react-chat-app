import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';

import ChatBodyText from './ChatBodyText'
import ChatBodyHeader from './ChatBodyHeader'
import ChatBodyWriteText from './ChatBodyWriteText'
import { addConversation } from './../../redux/slices/chatSlice'


import './ChatBody.css'

const ChatBody = () => {
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.chat.selectedUser);
  let newUser = {...user}
  let messages = [...user.messages]

  console.log('ChatBody>ChatBodyWriteText>>messages>', messages)

  const onMessageSendHandler = (message) => {
    console.log('ChatBody>ChatBodyWriteText>MESSAGE>', message)
    messages.push(message)
    newUser.messages = [...messages]
    dispatch(addConversation({id: user.id, newUser}))
    console.log('ChatBody>ChatBodyWriteText>messages>', messages)
    console.log('ChatBody>ChatBodyWriteText>messages>', newUser.messages)
    // user.messages.push(message)
  }
  
  return (
    <div className='chat-body'>
      <ChatBodyHeader user={user} />
      <ChatBodyText messages={newUser.messages} />
      <ChatBodyWriteText onMessageSend={onMessageSendHandler} />
    </div>
  )
}


export default ChatBody;

