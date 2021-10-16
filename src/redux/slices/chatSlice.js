import { createSlice } from '@reduxjs/toolkit'
import ChatService from './../../service/ChatService'

const users = ChatService.getUsers()
const loggedInUser = ChatService.getLoggedInUser()
const initialState = { users, selectedUser: users.length > 0 ? users[0] : loggedInUser, loggedInUser }

const DEFAULT_USER = loggedInUser

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
	setSelectedUser(state, action) {
		const selectedUser = state.users.find( user => user.id === action.payload.id) || DEFAULT_USER
		return {
			...state, selectedUser
		}
	},
	addConversation (state, action) {
		console.log('addConversations>action>', action)
		let selectedUser = DEFAULT_USER;
		const users = state.users.map(user => {
			if(user => user.id === action.payload.id) {
				user.messages.push(action.payload.message)
				selectedUser = user
			}
		})
		console.log('addConversations>selectedUser>', selectedUser)
		return {
			...state, 
			users: [...users],
			selectedUser
		}
	}
  },
})

export const { setSelectedUser, addConversation } = chatSlice.actions
export default chatSlice.reducer