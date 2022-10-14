import React from 'react'
import { Box, Typography } from '@mui/material'

const HomePage = () => {
	const user = localStorage.getItem('userEmail')


	return (
		<Box
			sx={{
				marginTop: 10,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Typography sx={{ fontSize: '3rem', align: 'center' }}>{`Hello, ${user}`}!</Typography>
		</Box>
	)
}

export default HomePage
