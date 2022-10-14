import { createSlice } from '@reduxjs/toolkit'

const initialState = { user: null }

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
})

export default postsSlice
