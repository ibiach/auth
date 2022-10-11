import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { LockOpenOutlined } from '@mui/icons-material'
import { Alert, Fade } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import Box from '../components/common/box/Box'
import UserForm from '../components/form/UserForm'
import { SIGN_IN } from '../constants/constants'
import { login } from '../features/authSlice/authSlice'

const SignIn = () => {
	const [showMessage, setShowMesage] = useState(false)

	const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
	const message = useSelector(state => state.auth.options.message)
	const isLoading = useSelector(state => state.auth.options.isLoading)
	const successful = useSelector(state => state.auth.options.successful)

	const dispatch = useDispatch()

	const handleLogin = ({ email, password }) => dispatch(login({ email, password }))

	useEffect(() => {
		if (message) {
			setShowMesage(true)
		}

		const timerMessage = setTimeout(() => setShowMesage(false), 4000)

		return () => clearInterval(timerMessage)
	}, [message])

	if (isLoggedIn || localStorage.getItem('user')) {
		return <Navigate to='/home' replace />
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOpenOutlined />
				</Avatar>

				<Typography component='h1' variant='h5'>
					{SIGN_IN}
				</Typography>

				<UserForm form='login' handleLogin={handleLogin} isLoading={isLoading} />
			</Box>

			<Fade in={Boolean(showMessage)} timeout={{ enter: 700, exit: 700 }}>
				<Alert severity={successful ? 'success' : 'error'}>{message}</Alert>
			</Fade>
		</Container>
	)
}

export default SignIn
