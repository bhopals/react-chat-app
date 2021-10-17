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
        <div className='body-icon search' />
          <input type='text' placeholder='Search...' value={searchText} onChange={onChangeHandler} />
      </div>
      <div className='body-icon compose-message' />      
    </div>
  )
}

SearchItems.propTypes = {
  onSearchChange: PropTypes.func.isRequired
}

export default SearchItems
