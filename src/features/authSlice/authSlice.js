import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AuthService from '../../service/auth.service'

const user = localStorage.getItem('userUid')

export const register = createAsyncThunk('auth/register', async ({ email, password }, thunkAPI) => {
	return await AuthService.register(email, password)
		.then(async userCredentials => {
			const user = userCredentials.user

			console.log('Registered user: ', user)

			return user.uid
		})
		.catch(error => {
			const errorCode = error.code
			const errorMessage = error.message

			console.log('Error ocured: ', errorCode, errorMessage)

			return thunkAPI.rejectWithValue({ errorCode: errorCode, errorMessage: errorMessage })
		})
})

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
	return await AuthService.login(email, password)
		.then(userCredentials => {
			const user = userCredentials.user

			console.log('Singed in user: ', user)

			return { email: user.email, uid: user.uid }
		})
		.catch(error => {
			const errorCode = error.code
			const errorMessage = error.message

			console.log('An error occured: ', errorCode, errorMessage)

			return thunkAPI.rejectWithValue({ errorCode: errorCode, errorMessage: errorMessage })
		})
})

export const logout = createAsyncThunk('auth/logout', () => AuthService.logout())

const initialState = user
	? { user, isLoggedIn: true, isLoading: false }
	: { user, isLoggedIn: false, isLoading: false }

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.pending]: state => {
			state.isLoading = true
		},
		[register.fulfilled]: state => {
			state.isLoading = false
			state.isLoggedIn = false
		},
		[register.rejected]: state => {
			state.isLoading = false
			state.isLoggedIn = false
		},
		[login.pending]: state => {
			state.isLoading = true
		},
		[login.fulfilled]: (state, action) => {
			state.isLoggedIn = true
			state.isLoading = false
			state.user = action.payload

			localStorage.setItem('userUid', action.payload.uid)
			localStorage.setItem('userEmail', action.payload.email)
		},
		[login.rejected]: state => {
			state.user = null
			state.isLoading = false
			state.isLoggedIn = false
		},
		[logout.fulfilled]: state => {
			state.user = null
			state.isLoggedIn = false

			localStorage.removeItem('userUid')
		},
	},
})

export default authSlice.reducer
