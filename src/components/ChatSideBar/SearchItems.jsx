import PropTypes from 'prop-types'
import React, { useState }  from 'react'
import { EMPTY } from '../../constants';

const SearchItems = ({ onSearchChange }) => {

  const [searchText, setSearchText] = useState(EMPTY)

  const onChangeHandler = (e) => {
    const value = (e && e.target.value.trim()) || EMPTY
    setSearchText(value)
    onSearchChange(value)
  }
  
  return (
    <div className='chat-side-bar-search'>
      <div className='search-box'>
        <div className='chat-app-icon search-icon search' />
          <input data-testid='search-items' type='text' placeholder='Search...' value={searchText} onChange={onChangeHandler} />
      </div>
      <div className='chat-app-icon compose-message-icon compose-message' onClick={() => alert('Please Type a message in the Input field provided. Once you have entered the TEXT Message, Kindly press ENTER or CLICK on Message Icon given next to it to SEND your message.')}/>      
    </div>
  )
}

SearchItems.propTypes = {
  onSearchChange: PropTypes.func.isRequired
}

export default SearchItems
