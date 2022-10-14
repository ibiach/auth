import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { Button } from '../components/common/buttons/Button'
import * as ROUTES from '../constants/routes'

const sx = {
	marginTop: 10,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}

const NotfoundPage = () => {
	const user = useSelector(state => state.auth.user)

	return (
		<Box sx={sx}>
			<Typography variant='h1' style={{ color: 'black' }}>
				404
			</Typography>

			<Typography variant='h6' style={{ color: 'black' }}>
				The page you’re looking for doesn’t exist.
			</Typography>

			<Box sx={sx}>
				<Button
					LinkComponent={Link}
					to={user ? ROUTES.PROFILE : ROUTES.SIGN_IN}
					variant='contained'
				>
					Back Home
				</Button>
			</Box>
		</Box>
	)
}

export default NotfoundPage
