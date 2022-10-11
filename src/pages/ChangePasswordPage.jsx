import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Alert, Fade } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import Box from '../components/common/box/Box'
import UserForm from '../components/form/UserForm'
import { CHANGE_PASSWORD } from '../constants/constants'

const ChangePasswordPage = () => {
	const [successful, setSuccessful] = useState(false)
	const [message, setMessage] = useState('')

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>

				<Typography component='h1' variant='h5'>
					{CHANGE_PASSWORD}
				</Typography>

				<UserForm form='change_password' />
			</Box>

			{message && (
				<Fade in={Boolean(message)} timeout={{ enter: 1000, exit: 2000 }}>
					<Alert severity={successful ? 'success' : 'error'}>{message}</Alert>
				</Fade>
			)}
		</Container>
	)
}

export default ChangePasswordPage
