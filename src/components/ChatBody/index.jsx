import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ChatBodyText from './ChatBodyText'
import ChatBodyHeader from './ChatBodyHeader'
import ChatBodyWriteText from './ChatBodyWriteText'
import { addConversation } from './../../redux/slices/chatSlice'

import './ChatBody.css'

const ChatBody = () => {
  
  const dispatch = useDispatch();
  const { selectedUser } = useSelector(state => state.chat);
  const { messages } = selectedUser

  const handleOnDispatch= (message) => dispatch(addConversation({ id: selectedUser.id, message}))
  
  return (
    <div className='chat-body'>
      <ChatBodyHeader user={selectedUser} />
      <ChatBodyText messages={messages} />
      <ChatBodyWriteText onDispatchHandler={handleOnDispatch} />
    </div>
  )
}


export default ChatBody;


