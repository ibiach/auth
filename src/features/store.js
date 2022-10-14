import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'

import authSlice from './authSlice/authSlice'
import postsSlice from './postsSlice/postsSlice'

export const rootReducer = combineReducers({
	auth: authSlice,
	posts: postsSlice,
})

export const store = configureStore({
	reducer: rootReducer,
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})
