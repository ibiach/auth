import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser: (state, action) => {
			state.email = action.payload
		},
	},
})

export default userSlice.reducer
export const { saveUser } = userSlice.actions
