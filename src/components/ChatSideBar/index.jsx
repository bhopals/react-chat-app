import React, { useState, useEffect }  from 'react'
import Search from './Search'
import CardItems from './CardItems'
import { useSelector } from 'react-redux';

const ChatSideBar = () => {

  const chatUsers = useSelector(state => state.chat.users);
  const [users, setUsers] = useState(chatUsers)

  const getMatchedUsers = (name) => chatUsers.filter(user => user.name.toLowerCase().includes(name))

  const onSearchChangeHandler = (searchString) => { setUsers(getMatchedUsers(searchString.toLowerCase())) }

  return (
    <div className="chat-side-bar">
        <Search users={users} onSearchChange={onSearchChangeHandler} />
        <CardItems users={users} />
    </div>
  )
}

export default ChatSideBar;

