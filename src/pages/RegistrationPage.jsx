import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LockOutlined } from '@mui/icons-material'
import { Alert, Avatar, Box, Fade, Grid, Link, TextField } from '@mui/material'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import { Button } from '../components/common/buttons/Button'
import * as ROUTES from '../constants/routes'
import { register } from '../features/authSlice/authSlice'
import useShowMessage from '../hook/useShowMessage'

const SignUp = () => {
	const [message, setMessage] = useState('')
	const [successful, setSuccessful] = useState(false)
	const [info, setInfo] = useState({
		email: '',
		password: '',
		passwordConfirm: '',
	})

	const { email, password, passwordConfirm } = info

	const ref = useRef()

	const dispatch = useDispatch()

	const isLoading = useSelector(state => state.auth.isLoading)

	const isShowMessage = useShowMessage(message, isLoading)

	useEffect(() => {
		return () => setInfo({ email: '', password: '', passwordConfirm: '' })
	}, [successful])

	const handleChangeInfo = e => setInfo({ ...info, [e.target.name]: e.target.value })

	const handleSubmit = e => {
		e.preventDefault()

		dispatch(register({ email, password }))
			.unwrap()
			.then(() => {
				setMessage('success signup')
				setSuccessful(true)
			})
			.catch(error => setMessage(error.errorMessage))
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
					<LockOutlined />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
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

							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='password confirmation'
									label='Password confirmation'
									type='password'
									name='passwordConfirm'
									value={passwordConfirm}
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
								<Link href={ROUTES.SIGN_IN} variant='body2'>
									Already have an account? Sign in
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

export default SignUp
