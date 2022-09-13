import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import UserForm from '../components/form/UserForm'
import { login } from '../store/slices/authSlice'

export default function SignIn() {
	const [loading, setLoading] = useState(false)

	const { email } = useSelector(state => state.user)
	const { password } = useSelector(state => state.user)
	const { isLoggedIn } = useSelector(state => state.auth)

	const dispatch = useDispatch()

	const handleLogin = () => {
		setLoading(true)

		dispatch(login(email, login))
			.unwrap()
			.then(() => {
				console.log(email, password)
				props.history.push('/home')
				window.location.reload()
			})
			.catch(() => {
				setLoading(false)
			})
	}

	if (isLoggedIn) {
		return <Navigate to='/home' />
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
					Sign in
				</Typography>

				<UserForm form='login' handleLogin={handleLogin} loading={loading} />
			</Box>
		</Container>
	)
}
