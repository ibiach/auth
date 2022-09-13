import React from 'react'
import { Button, CircularProgress, Grid, Link } from '@mui/material'
import { Box } from '@mui/system'

import {
	LOGIN,
	REGISTRATION,
	SIGN_IN,
	SIGN_UP,
	TEXT_TO_SIGN_IN,
	TEXT_TO_SIGN_UP,
} from '../../utils/constants/constants'
import Input from '../common/inputs/Input'

export default props => {
	const { form, handleLogin, handleRegister, loading } = props

	const isRegistration = form === REGISTRATION

	const textFormLink = isRegistration ? TEXT_TO_SIGN_IN : TEXT_TO_SIGN_UP
	const textButton = isRegistration ? SIGN_UP : SIGN_IN
	const linkToPage = isRegistration ? LOGIN : REGISTRATION

	return (
		<Box component='form' noValidate sx={{ mt: 2 }} handle={handleLogin && handleRegister}>
			<Input form={form} isRegistration={isRegistration} />
			<Button
				sx={{ mt: 3, mb: 2 }}
				disabled={loading}
				type='sumbit'
				variant='contained'
				onClick={e => {
					e.preventDefault()
					console.log('1')
					{
						handleRegister()
					}
				}}
			>
				{loading && <CircularProgress size={24.5} />}
				{!loading && <span>{textButton}</span>}
			</Button>

			<Grid container justifyContent='flex-end'>
				<Grid item>
					<Link href={`/${linkToPage}`} variant='body2'>
						{textFormLink}
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
