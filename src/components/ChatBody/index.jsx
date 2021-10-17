import React, { useState, useEffect } from 'react'
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
  const [messages, setMessage] = useState([...user.messages])

  const onMessageSendHandler = (message) => {
    setMessage([...messages, { text: message, isReceived: false }]);
    dispatch(addConversation({ messages, user}))
  }
  
  return (
    <div className='chat-body'>
      <ChatBodyHeader user={user} />
      <ChatBodyText messages={messages} />
      <ChatBodyWriteText onMessageSend={onMessageSendHandler} />
    </div>
  )
}


export default ChatBody;

