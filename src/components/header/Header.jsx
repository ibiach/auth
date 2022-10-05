import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Box } from '@mui/system'

import { CHANGE_PASSWORD, LOGOUT, SIGN_IN, SIGN_UP } from '../../constants/constants'
import * as ROUTES from '../../constants/routes'
import { saveUser } from '../../features/userSlice/userSlice'
import { auth } from '../firebase/firebase'

const Header = ({}) => {
	const dispatch = useDispatch()

	const user = useSelector(state => state.user.email)

	useEffect(() => {
		console.log(user)
	}, [user])

	const handleLogout = () => {
		auth.signOut()
			.then(() => {
				console.log('User sign out')
				dispatch(saveUser(undefined))
			})
			.catch(error => console.log(error))
	}

	const hadndleChangePassword = () => {
		console.log('hadndleChangePassword')
	}

	return (
		<Box sx={{ flexGrow: 3 }}>
			<AppBar position='static'>
				<Toolbar sx={{ justifyContent: 'flex-end' }}>
					<Box>
						<Button
							LinkComponent={Link}
							to={user ? ROUTES.LANDING : ROUTES.SIGN_IN}
							color='inherit'
							onClick={handleLogout}
						>
							{user ? LOGOUT : SIGN_IN}
						</Button>

						<Button
							LinkComponent={Link}
							to={user ? ROUTES.CHANGE_PASSWORD : ROUTES.SIGN_UP}
							color='inherit'
							onClick={hadndleChangePassword}
						>
							{user ? CHANGE_PASSWORD : SIGN_UP}
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
