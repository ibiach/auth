import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotfoundPage from './pages/NotfoundPage'
import RegistrationPage from './pages/RegistrationPage'

const App = () => {
	return (
		<div style={{ height: '100%' }}>
			<Header />
			<Container maxWidth='lg'>
				<Routes>
					<Route path='/home' element={<HomePage />} />
					<Route path='/registration' element={<RegistrationPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='*' element={<NotfoundPage />} />
				</Routes>
			</Container>
			<Footer />
		</div>
	)
}

export default App
