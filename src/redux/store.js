import { configureStore } from '@reduxjs/toolkit'
import chat from './slices/chatSlice'

export const store = configureStore({
	reducer: {
		chat
	}
})