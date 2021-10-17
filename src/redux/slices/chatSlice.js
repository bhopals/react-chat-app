import { createSlice } from '@reduxjs/toolkit'
import ChatService from './../../service/ChatService'

const users = ChatService.getUsers()
const loggedInUser = ChatService.getLoggedInUser()
const initialState = { users, selectedUser: users.length > 0 ? users[0] : loggedInUser, loggedInUser }
console.log('ChatService>users>', users)
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
		const { payload } = action
		const users = state.users.map(user => {
			if(user.id === payload.user.id) {
				user = { ...payload.user, messages: payload.messages };
				console.log('UPDATE USER>', user)
			}
			return user;
		})
		console.log('addConversations>selectedUser>', users)
		return {
			...state, 
			users: [...users]
		}
	}
  },
})

export const { setSelectedUser, addConversation } = chatSlice.actions
export default chatSlice.reducer