import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'

import authSlice from './slices/authSlice'
import userSlice from './slices/userSlice'

export const rootReducer = combineReducers({
	user: userSlice,
	auth: authSlice,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
})
