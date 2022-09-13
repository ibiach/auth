import React from 'react'
import { TextField } from '@mui/material'

const InputPassword = ({ handlerGetUserPassword }) => {
	return (
		<TextField
			required
			fullWidth
			label='Password'
			type='password'
			name='password'
			onChange={handlerGetUserPassword}
		/>
	)
}

export default InputPassword
