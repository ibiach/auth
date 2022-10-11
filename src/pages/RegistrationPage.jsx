import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LockOutlined } from '@mui/icons-material'
import { Alert, Avatar, Fade } from '@mui/material'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import Box from '../components/common/box/Box'
import UserForm from '../components/form/UserForm'
import { SIGN_UP } from '../constants/constants'
import { register } from '../features/authSlice/authSlice'

const SignUp = () => {
	const [showMessage, setShowMesage] = useState(false)

	const message = useSelector(state => state.auth.options.message)
	const isLoading = useSelector(state => state.auth.options.isLoading)
	const successful = useSelector(state => state.auth.options.successful)

	const dispatch = useDispatch()

	useEffect(() => {
		if (message) {
			setShowMesage(true)
		}

		const timerMessage = setTimeout(() => setShowMesage(false), 4000)

		return () => clearInterval(timerMessage)
	}, [message])

	const handleRegister = ({ email, password }) => dispatch(register({ email, password }))

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlined />
				</Avatar>

				<Typography component='h1' variant='h5'>
					{SIGN_UP}
				</Typography>

				<UserForm form='registration' handleRegister={handleRegister} isLoading={isLoading} />
			</Box>

			<Fade in={Boolean(showMessage)} timeout={{ enter: 700, exit: 700 }}>
				<Alert severity={successful ? 'success' : 'error'}>{message}</Alert>
			</Fade>
		</Container>
	)
}

export default SignUp
