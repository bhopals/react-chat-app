import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

import { EMPTY, SELECTED } from '../../constants';

const CardItem = ({ user, onClickHandler }) => {
  
  const { users, selectedUser } = useSelector(state => state.chat);
  const { messages = [] } = users.find(({ id }) => id === user.id) || selectedUser

  return (
    <div className={`card-item ${ selectedUser.id === user.id ? SELECTED : EMPTY }`} onClick={() => onClickHandler(user)} key={user.id}>
        <div className='avatar'>
            <img src={user.profilePhoto} /> 
        </div>
        <div className='profile'>
            <div className='name'>{user.name}</div>
            <div className='preview'>{ messages.length > 0 ? messages[messages.length - 1].text : EMPTY }</div>
        </div>
    </div>
  )
}

CardItem.defaultProps = {
   user:  {}
}

CardItem.propTypes = {
    user: PropTypes.object.isRequired,
    onClickHandler: PropTypes.func.isRequired
}

export default CardItem
