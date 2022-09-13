import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Alert } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import UserForm from '../components/form/UserForm'
import { register } from '../store/slices/authSlice'

export default function SignUp() {
	const [successful, setSuccessful] = useState(false)

	const dispatch = useDispatch()

	const { email } = useSelector(state => state.user)
	const { password } = useSelector(state => state.user)
	const { repeatPassword } = useSelector(state => state.user)

	console.log(password)

	const handleRegister = () => {
		setSuccessful(false)

		if (password === repeatPassword) {
			dispatch(register({ email, password }))
				.unwrap()
				.then(() => {
					console.log(email, password)
					setSuccessful(true)
				})
				.catch(() => {
					setSuccessful(false)
				})
		}
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>

				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<UserForm form='registration' handleRegister={handleRegister} />
			</Box>
			{/* {message && <Alert severity={successful ? 'success' : 'error'}>{message}</Alert>} */}
		</Container>
	)
}
