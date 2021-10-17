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
		let selectedUser;
		const { id, message } = action.payload
		const users = state.users.map(user => {
			if(user.id === id) {
				user = { ...user, messages: [...user.messages, { text: message, isOwnSentMessage: false }] };
				selectedUser = user
			}
			return user;
		})
		return {
			...state, 
			selectedUser,
			users: [...users]
		}
	}
  },
})

export const { setSelectedUser, addConversation } = chatSlice.actions
export default chatSlice.reducer