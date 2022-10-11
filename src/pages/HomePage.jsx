import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

import Box from '../components/common/box/Box'

const HomePage = () => {
	const user = localStorage.getItem('userEmail')

	return (
		<Box>
			<Typography sx={{ fontSize: '3rem', align: 'center' }}>{`Hello, ${user}`}!</Typography>
		</Box>
	)
}

export default HomePage
