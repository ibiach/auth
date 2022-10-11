import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'

import authSlice from './authSlice/authSlice'

export const rootReducer = combineReducers({
	auth: authSlice,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})
