import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	email: '',
	message: '',
	password: '',
	repeatPassword: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getEmail: (state, action) => {
			state.email = action.payload
		},
		getPassword: (state, action) => {
			state.password = action.payload
		},
		getSecondPassword: (state, action) => {
			state.repeatPassword = action.payload
		},
		getMessage: (state, action) => {
			state.message = action.payload
		},
	},
})

export default userSlice.reducer
export const { getEmail, getPassword, getSecondPassword, getMessage } = userSlice.actions
