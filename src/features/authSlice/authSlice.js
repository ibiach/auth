import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import app, { auth } from '../../components/firebase/firebase'
import AuthService from '../../service/auth.service'

const user = localStorage.getItem('user')

export const register = createAsyncThunk('auth/register', async ({ email, password }, thunkAPI) => {
	try {
		return AuthService.register(email, password)
	} catch (error) {
		return thunkAPI.rejectWithValue()
	}
})

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
	try {
		return AuthService.login(email, password)
	} catch (error) {
		return thunkAPI.rejectWithValue()
	}
})

export const logout = createAsyncThunk('auth/logout', async () => {
	AuthService.logout()
})

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled]: state => {
			state.isLoggedIn = false
		},
		[register.rejected]: state => {
			state.isLoggedIn = false
		},
		[login.fulfilled]: (state, action) => {
			state.isLoggedIn = true
			state.user = action.payload.user
		},
		[login.rejected]: state => {
			state.isLoggedIn = false
			state.user = null
		},
		[logout.fulfilled]: state => {
			state.isLoggedIn = false
			state.user = null
		},
	},
})

export default authSlice.reducer
