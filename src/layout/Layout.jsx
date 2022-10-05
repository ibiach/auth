import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/system'

import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Layout = () => {
	return (
		<>
			<Header />

			<Container maxWidth='md'>
				<Outlet />
			</Container>

			<Footer />
		</>
	)
}

export default Layout
