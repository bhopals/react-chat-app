import React from 'react'
import PropTypes from 'prop-types'

const CardItem = ({user = {}, key, onClickHandler, isSelected}) => {
    const { messages = [] } = user 
    if(isSelected) {
        console.log('the selected User is >', user)
    }
  return (
    <div className={`card-item ${ isSelected ? ' selected' : '' }`} onClick={() => onClickHandler(user)} key={key}>
        <div className='avatar'>
            <img src={user.profilePhoto} /> 
        </div>
        <div className='profile'>
            <div className='name'>{user.name}</div>
            <div className='preview'>{ messages.length > 0 ? messages[messages.length - 1].text : '' }</div>
        </div>
    </div>
  )
}

CardItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default CardItem