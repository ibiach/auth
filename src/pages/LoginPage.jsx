import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { LockOpenOutlined } from '@mui/icons-material'
import { Alert } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import Box from '../components/common/box/Box'
import { auth } from '../components/firebase/firebase'
import UserForm from '../components/form/UserForm'
import { SIGN_IN } from '../constants/constants'
import { saveUser } from '../features/userSlice/userSlice'

const SignIn = () => {
	const [isLoading, setLoading] = useState(false)
	const [isLoggedIn, setLoggedIn] = useState(false)
	const [successful, setSuccessful] = useState(false)
	const [message, setMessage] = useState('')

	const dispatch = useDispatch()

	const handleLogin = ({ email, password }) => {
		setLoading(true)
		auth.signInWithEmailAndPassword(email, password)
			.then(userCredential => {
				console.log(email, password)
				const user = userCredential.user

				dispatch(saveUser(user.email))

				setLoading(false)
				setLoggedIn(true)
				setSuccessful(true)
				setMessage('Logged in')

				console.log('Singed in user: ', user)
			})
			.catch(error => {
				setLoading(false)
				setMessage('Something goes wrong...')
				const errorCode = error.code
				const errorMessage = error.message
				console.log('An error occured: ', errorCode, errorMessage)
			})
	}

	if (isLoggedIn) {
		return <Navigate to='/home' />
	}

	return (
		<Container component='main' maxWidth='lg'>
			<CssBaseline />
			<Box>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOpenOutlined />
				</Avatar>

				<Typography component='h1' variant='h5'>
					{SIGN_IN}
				</Typography>

				<UserForm form='login' handleLogin={handleLogin} isLoading={isLoading} />
				{message && <Alert severity={successful ? 'success' : 'error'}>{message}</Alert>}
			</Box>
		</Container>
	)
}

export default SignIn
