import * as React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import Box from '../components/common/box/Box'
import UserForm from '../components/form/UserForm'
import { CHANGE_PASSWORD } from '../constants/constants'

const ChangePasswordPage = () => {
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
		</Container>
	)
}

export default ChangePasswordPage
