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
      <div className='chat-app-icon compose-message-icon compose-message' onClick={() => alert('Please type a message in the input field provided. Once you have entered the text message, kindly press ENTER or CLICK on message icon given next to it to send your message.')}/>      
    </div>
  )
}

SearchItems.propTypes = {
  onSearchChange: PropTypes.func.isRequired
}

export default SearchItems
