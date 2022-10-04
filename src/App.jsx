import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box, Container } from '@mui/material'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import * as ROUTES from './constants/routes'
import ChangePasswordPage from './pages/ChangePasswordPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotfoundPage from './pages/NotfoundPage'
import RegistrationPage from './pages/RegistrationPage'

const App = () => {
	return (
		<Box style={{ height: '100%' }}>
			<Header />

			<Container maxWidth='lg'>
				<Routes>
					<Route path={ROUTES.OTHER} element={<NotfoundPage />} />
					<Route path={ROUTES.LANDING} element={<LoginPage />} />
					<Route path={ROUTES.SIGN_IN} element={<LoginPage />} />
					<Route path={ROUTES.SIGN_UP} element={<RegistrationPage />} />
					<Route path={ROUTES.PROFILE} element={<HomePage />} />
					<Route path={ROUTES.CHANGE_PASSWORD} element={<ChangePasswordPage />} />
				</Routes>
			</Container>
			<Footer />
		</Box>
	)
}

export default App
