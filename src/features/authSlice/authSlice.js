import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AuthService from '../../service/auth.service'

const user = localStorage.getItem('userUid')

export const register = createAsyncThunk('auth/register', async ({ email, password }, thunkAPI) => {
	return await AuthService.register(email, password)
		.then(async userCredentials => {
			const user = userCredentials.user

			console.log('Registered user: ', user)
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

export const logout = createAsyncThunk('auth/logout', async () => AuthService.logout())

const initialState = user
	? { isLoggedIn: true, user, options: { isLoading: false, message: '', successful: true } }
	: { isLoggedIn: false, user: null, options: { isLoading: false, message: '', successful: false } }

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.pending]: state => {
			state.options = { ...state.options, isLoading: true }
		},
		[register.fulfilled]: state => {
			state.isLoggedIn = false
			state.options = { successful: true, isLoading: false, message: 'success signup' }
		},
		[register.rejected]: (state, action) => {
			state.isLoggedIn = false
			state.options = { ...state.options, isLoading: false }
			state.options = { ...state.options, successful: false, message: action.payload.errorMessage }
		},
		[login.pending]: state => {
			state.options = { ...state.options, isLoading: true }
		},
		[login.fulfilled]: (state, action) => {
			localStorage.setItem('userUid', action.payload.uid)
			localStorage.setItem('userEmail', action.payload.email)

			state.isLoggedIn = true
			state.user = action.payload
			state.options = { ...state.options, isLoading: false }
		},
		[login.rejected]: (state, action) => {
			state.isLoggedIn = false
			state.user = null
			state.options = { ...state.options, isLoading: false, message: action.payload.errorMessage }
		},
		[logout.fulfilled]: state => {
			localStorage.removeItem('userUid')

			state.isLoggedIn = false
			state.user = null
		},
	},
})

export default authSlice.reducer
