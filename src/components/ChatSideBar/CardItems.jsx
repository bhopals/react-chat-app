import React from 'react'
import PropTypes from 'prop-types'
import CardItem from './CardItem'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from './../../redux/slices/chatSlice'
const CardItems = ({users}) => {
  console.log('ChatSideBar>CardItems>USERS>', users)

  const dispatch = useDispatch();
  const chat = useSelector(state => state.chat);
  const { selectedUser } = chat
  const handleOnClick = (user) => {
    console.log('CardItems>selectedUser>', user)
    dispatch(setSelectedUser(user))
  }
  return (
    <div className='card-items'>
       {users.map((user, index) => <CardItem user={user} key={index} onClickHandler={handleOnClick} isSelected= { selectedUser.id === user.id}/>)}
    </div>
  )
}

CardItems.propTypes = {
    users: PropTypes.array.isRequired
}

export default CardItems