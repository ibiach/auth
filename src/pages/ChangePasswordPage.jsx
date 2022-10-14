import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Alert, Box, Fade, Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import { Button } from '../components/common/buttons/Button'
import TextField from '../components/common/inputs/TextField'
import { auth } from '../components/firebase/firebase'
import useShowMessage from '../hook/useShowMessage'

const ChangePasswordPage = () => {
	const [info, setInfo] = useState({
		password: '',
		passwordConfirm: '',
	})

	const { password, passwordConfirm } = info

	const ref = useRef()

	const successful = useSelector(state => state.auth.successful)
	const isLoading = useSelector(state => state.auth.isLoading)
	const message = useSelector(state => state.auth.message)

	const dispatch = useDispatch()

	const user = auth.currentUser

	const isShowMessage = useShowMessage()

	const handleChangeInfo = e => setInfo({ ...info, [e.target.name]: e.target.value })

	const handleSubmit = e => {
		e.preventDeafult()
		auth.updatePassword(user, password)
			.then(() => {
				// Update successful.
			})
			.catch(error => {
				// An error ocurred
				// ...
			})
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
					<LockOutlinedIcon />
				</Avatar>

				<Typography component='h1' variant='h5'>
					CHANGE PASSWORD
				</Typography>
			</Box>

			<Box sx={{ mt: 2 }}>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
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
						CHANGE PASSWORD
					</Button>
				</form>
			</Box>

			<Fade in={Boolean(isShowMessage)} timeout={{ enter: 700, exit: 700 }}>
				<Alert severity={successful ? 'success' : 'error'}>{message}</Alert>
			</Fade>
		</Container>
	)
}

export default ChangePasswordPage
