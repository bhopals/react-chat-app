import React, { useRef } from 'react';
import { useDetectOutsideClick } from './useDetectOutsideClick';

import './index.css'

export default function DropDownMenu ({ user = {} }) {

  const dropdownRef = useRef(null);
  const { email, name, username, messages, lastSeen } = user
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  
  const onClick = () => setIsActive(!isActive);
  
  return (
    <div className='drop-down-menu-container'>
      <div className='down-arrow-icon down-arrow drop-down-menu-trigger' onClick={onClick}></div>  
      <nav ref={dropdownRef} className={`drop-down-menu-items ${isActive ? 'active' : 'inactive'}`} >
        <ul className='user-profile'>
           <li>{name}</li>
           <li>Signed in as <b>{username}</b></li>
           <li>{email}</li>
           <li>Messages Received &nbsp;<b><span className='messages-count'>{messages.length}</span></b></li>
           <li>Status <b><span className='green-dot'></span>Online</b></li>
           <li>Last Seen on <b><span className='last-seen'></span>{lastSeen}</b></li>
        </ul>
      </nav>
    </div>
  );
}
