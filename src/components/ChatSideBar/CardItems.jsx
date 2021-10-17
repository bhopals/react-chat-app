import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';

import CardItem from './CardItem'
import { setSelectedUser } from './../../redux/slices/chatSlice'


const CardItems = ({ users }) => {

  const dispatch = useDispatch();
  const selectedUser = useSelector(state => state.chat.selectedUser);

  const handleOnClick = (user) => dispatch(setSelectedUser(user))

  return (
    <div className='card-items'>
       {users.map((user, index) => <CardItem user={user} onClickHandler={handleOnClick} isSelected= { selectedUser.id === user.id} key={index} />)}
    </div>
  )
}

CardItems.defaultProps = {
  users: []
}

CardItems.propTypes = {
  users: PropTypes.array.isRequired
}

export default CardItems
