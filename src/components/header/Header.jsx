import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Box } from '@mui/system'

import * as ROUTES from '../../constants/routes'
import { logout } from '../../features/authSlice/authSlice'

const Header = () => {
	const dispatch = useDispatch()

	const { isLoggedIn } = useSelector(state => state.auth)

	const handleLogout = () => {
		console.log('handleLogout')
		dispatch(logout())
	}

	const hadndleChangePassword = () => {
		console.log('hadndleChangePassword')
	}

	return (
		<Box
			sx={{
				flexGrow: 3,
			}}
		>
			<AppBar position='static'>
				{isLoggedIn ? (
					<Toolbar
						sx={{
							justifyContent: 'flex-end',
						}}
					>
						<Box>
							<Button
								LinkComponent={Link}
								to={ROUTES.SIGN_IN}
								color='inherit'
								onClick={handleLogout}
							>
								Logout
							</Button>
							<Button
								LinkComponent={Link}
								to={ROUTES.CHANGE_PASSWORD}
								color='inherit'
								onClick={hadndleChangePassword}
							>
								Change password
							</Button>
						</Box>
					</Toolbar>
				) : (
					<Toolbar
						sx={{
							justifyContent: 'flex-end',
						}}
					>
						<Box>
							<Button LinkComponent={Link} to={ROUTES.SIGN_IN} color='inherit'>
								Sign in
							</Button>

							<Button LinkComponent={Link} to={ROUTES.SIGN_UP} color='inherit'>
								Sign up
							</Button>
						</Box>
					</Toolbar>
				)}
			</AppBar>
		</Box>
	)
}

export default Header
