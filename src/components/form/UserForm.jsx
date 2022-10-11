import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Link } from '@mui/material'
import { Box } from '@mui/system'

import * as CONSTANTS from '../../constants/constants'
import * as ROUTES from '../../constants/routes'
import { Button } from '../common/buttons/Button'
import TextField from '../common/inputs/TextField'

export default ({ form, handleLogin, handleRegister, isLoading }) => {
	const [info, setInfo] = useState({
		email: '',
		password: '',
		passwordConfirm: '',
	})

	const successful = useSelector(state => state.auth.options.successful)

	useEffect(() => {
		return () => setInfo({ email: '', password: '', passwordConfirm: '' })
	}, [successful])

	const ref = useRef()

	const isRegistration = form === CONSTANTS.REGISTRATION

	const textFormLink = isRegistration ? CONSTANTS.TEXT_TO_SIGN_IN : CONSTANTS.TEXT_TO_SIGN_UP
	const textButton = isRegistration ? CONSTANTS.SIGN_UP : CONSTANTS.SIGN_IN
	const linkToPage = isRegistration ? ROUTES.SIGN_IN : ROUTES.SIGN_UP

	const { email, password, passwordConfirm } = info

	const handleChangeInfo = e => setInfo({ ...info, [e.target.name]: e.target.value })

	const handleSubmit = event => {
		event.preventDefault()

		if (isRegistration && password !== passwordConfirm) return

		return Boolean(handleLogin) ? handleLogin({ email, password }) : handleRegister({ email, password })
	}

	return (
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

					{isRegistration && (
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
					)}
				</Grid>

				<Button ref={ref} fullWidth type='submit' variant='contained' loading={isLoading} sx={{ mt: 3, mb: 2 }}>
					{textButton}
				</Button>

				<Grid container justifyContent='flex-end'>
					<Grid item>
						<Link href={linkToPage} variant='body2'>
							{textFormLink}
						</Link>
					</Grid>
				</Grid>
			</form>
		</Box>
	)
}
