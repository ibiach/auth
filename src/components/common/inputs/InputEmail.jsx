import React from 'react'
import { TextField } from '@mui/material'

const InputEmail = ({ handlerGetUserEmail }) => {
	return (
		<TextField
			required
			fullWidth
			label='Email addres'
			type='text'
			name='email'
			onChange={handlerGetUserEmail}
		/>
	)
}

export default InputEmail
