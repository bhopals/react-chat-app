import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
	name: 'chat',
	
	initialState: {
		conversations: []
	},
	
	reducers: {
		
	}
});

export const {} = chatSlice.actions
export default chatSlice.reducer