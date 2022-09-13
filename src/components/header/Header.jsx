import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Box } from '@mui/system'

const Header = () => {
	const { isLoggedIn } = useSelector(state => state.auth)
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
							<Button LinkComponent={Link} to='/login' color='inherit'>
								Logout
							</Button>
							<Button LinkComponent={Link} to='/change_password' color='inherit'>
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
							<Button LinkComponent={Link} to='/login' color='inherit'>
								Sign in
							</Button>

							<Button LinkComponent={Link} to='/registration' color='inherit'>
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
