import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { LockOpenOutlined } from '@mui/icons-material'
import { Alert, Box, Fade, Grid, Link } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import { Button } from '../components/common/buttons/Button'
import TextField from '../components/common/inputs/TextField'
import { auth } from '../components/firebase/firebase'
import * as ROUTES from '../constants/routes'
import { login } from '../features/authSlice/authSlice'
import useShowMessage from '../hook/useShowMessage'

const SignIn = () => {
	const [message, setMessage] = useState('')
	const [successful, setSuccessful] = useState(false)
	const [info, setInfo] = useState({
		email: '',
		password: '',
	})

	const { email, password } = info

	const ref = useRef()

	const dispatch = useDispatch()

	const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
	const isLoading = useSelector(state => state.auth.isLoading)

	const isShowMessage = useShowMessage(message, isLoading)

	const handleChangeInfo = e => setInfo({ ...info, [e.target.name]: e.target.value })

	const handleSubmit = e => {
		e.preventDefault()

		dispatch(login({ email, password }))
			.unwrap()
			.then(() => {
				setMessage('success signup')
				setSuccessful(true)
			})
			.catch(error => setMessage(error.errorMessage))
	}

	if (isLoggedIn || localStorage.getItem('user')) {
		return <Navigate to='/home' replace />
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 10,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOpenOutlined />
				</Avatar>

				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>

				<Box sx={{ mt: 2 }}>
					<form onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									name='email'
									label='Email'
									value={email}
									onChange={handleChangeInfo}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='password'
									name='password'
									label='Password'
									type='password'
									value={password}
									onChange={handleChangeInfo}
								/>
							</Grid>
						</Grid>

						<Button
							ref={ref}
							fullWidth
							type='submit'
							variant='contained'
							loading={isLoading}
							sx={{ mt: 3, mb: 2 }}
						>
							Sign up
						</Button>

						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link href={ROUTES.SIGN_UP} variant='body2'>
									Don’t have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
					</form>
				</Box>
			</Box>

			<Fade in={Boolean(isShowMessage)} timeout={{ enter: 700, exit: 700 }}>
				<Alert severity={successful ? 'success' : 'error'}>{message}</Alert>
			</Fade>
		</Container>
	)
}

export default SignIn
