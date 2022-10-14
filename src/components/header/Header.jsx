import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppBar, Toolbar } from '@mui/material'
import { Box } from '@mui/system'

import * as ROUTES from '../../constants/routes'
import { logout } from '../../features/authSlice/authSlice'
import { Button } from '../common/buttons/Button'

const Header = () => {
	const dispatch = useDispatch()

	const user = useSelector(state => state.auth.user)

	const navigate = useNavigate()

	const handleLogout = () =>
		dispatch(logout()).then(() => navigate(ROUTES.SIGN_IN, { replace: true }))

	return (
		<Box sx={{ flexGrow: 3 }}>
			<AppBar position='static'>
				<Toolbar sx={{ justifyContent: 'flex-end' }}>
					<Box>
						<Button
							color='inherit'
							LinkComponent={Link}
							to={!user ? ROUTES.SIGN_IN : null}
							onClick={user ? handleLogout : null}
						>
							{user ? 'LOGOUT' : 'SIGN IN'}
						</Button>

						<Button
							color='inherit'
							LinkComponent={Link}
							to={user ? ROUTES.CHANGE_PASSWORD : ROUTES.SIGN_UP}
						>
							{user ? 'CHANGE PASSWORD' : 'SIGN UP'}
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
