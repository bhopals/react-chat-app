import React, { useState }  from 'react'
import SearchItems from './SearchItems'
import CardItems from './CardItems'
import { useSelector } from 'react-redux';

import './index.css'

const ChatSideBar = () => {

  const chatUsers = useSelector(state => state.chat.users);

  const [users, setUsers] = useState(chatUsers)

  const getMatchedUsers = (filteredName) => chatUsers.filter(({ name }) => name.toLowerCase().includes(filteredName))

  const handleOnSearch = (searchString) => setUsers(getMatchedUsers(searchString.toLowerCase()))

  return (
    <div className="chat-side-bar">
        <SearchItems onSearchChange={handleOnSearch} />
        <CardItems users={users} />
    </div>
  )
}

export default ChatSideBar;



