import * as React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import UserForm from '../components/form/UserForm'

const ChangePasswordPage = () => {
	const sx = {
		marginTop: 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box>
				<Avatar sx={sx}>
					<LockOutlinedIcon />
				</Avatar>

				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>

				<UserForm form='change_password' />
			</Box>
		</Container>
	)
}

export default ChangePasswordPage
