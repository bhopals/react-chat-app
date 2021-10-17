import React from 'react'
import ChatService from './../../service/ChatService.js'

import ChatBody from './../ChatBody'
import ChatHeader from './../ChatHeader'
import ChatSideBar from './../ChatSideBar'

import './style.css'

export default class ChatAppContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      selectedUser: {}
    }
    // this.handleVisualizations = this.handleVisualizations.bind(this)
  }


  // shouldComponentUpdate (nextProps, nextState) {
  //   if (nextState.isQApiConnected !== this.state.isQApiConnected) {
  //     return true
  //   }
  //   return false
  // }

  // componentDidUpdate (prevProps, prevState, snapshot) {
  //   const users = getUsers()
  //   console.log('componentDidUpdate>', getUsers())
  //   this.setState({ users, selectedUser: users[0] })
  // }

  componentDidMount () {
    const users = ChatService.getUsers()
    this.setState({ users, selectedUser: users[0] })
    console.log('componentDidMount>', users)
  }


  render () {
    const { users, selectedUser } = this.state
    console.log('ChatAppContainer>users>', users)
    console.log('ChatAppContainer>this.state>', this.state)
    return (
      <div className='chat-app-main'>
        <div className='chat-app-container'>
          <div className='header-container'>
            <ChatHeader user={selectedUser} />
          </div>
          <div className='body-container'>
            <div className='panel left-panel'>
              <ChatSideBar users={users} />
            </div>
            <div className='panel right-panel'>
              <ChatBody user={selectedUser} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
