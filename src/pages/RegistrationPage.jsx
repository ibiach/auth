import React, { useEffect } from 'react'
import { useState } from 'react'
import { LockOutlined } from '@mui/icons-material'
import { Alert, Avatar } from '@mui/material'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import Box from '../components/common/box/Box'
import { auth } from '../components/firebase/firebase'
import UserForm from '../components/form/UserForm'
import { SIGN_UP } from '../constants/constants'

const SignUp = () => {
	const [isLoading, setLoading] = useState(false)
	const [successful, setSuccessful] = useState(false)
	const [message, setMessage] = useState('')

	const handleRegister = ({ email, password }) => {
		setLoading(true)
		auth.createUserWithEmailAndPassword(email, password)
			.then(userCredential => {
				const user = userCredential.user

				setLoading(false)
				setSuccessful(true)
				setMessage('Registred')

				console.log('Registered user: ', user)
			})
			.catch(error => {
				setLoading(false)
				setMessage('Something goes wrong...')
				const errorCode = error.code
				const errorMessage = error.message
				console.log('Error ocured: ', errorCode, errorMessage)
			})
	}

	useEffect(() => {
		const timerId = setTimeout(() => setMessage(''), 3000)

		return () => clearTimeout(timerId)
	}, [message])

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

				<UserForm
					form='registration'
					handleRegister={handleRegister}
					isLoading={isLoading}
				/>
			</Box>
			{message && <Alert severity={successful ? 'success' : 'error'}>{message}</Alert>}
		</Container>
	)
}

export default SignUp
