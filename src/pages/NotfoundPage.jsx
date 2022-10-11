import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

import Box from '../components/common/box/Box'
import { Button } from '../components/common/buttons/Button'
import * as ROUTES from '../constants/routes'

const NotfoundPage = () => {
	const user = useSelector(state => state.auth.user)

	return (
		<Box>
			<Typography variant='h1' style={{ color: 'black' }}>
				404
			</Typography>

			<Typography variant='h6' style={{ color: 'black' }}>
				The page you’re looking for doesn’t exist.
			</Typography>

			<Box>
				<Button LinkComponent={Link} to={user ? ROUTES.PROFILE : ROUTES.SIGN_IN} variant='contained'>
					Back Home
				</Button>
			</Box>
		</Box>
	)
}

export default NotfoundPage
