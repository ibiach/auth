import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const HomePage = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '90vh',
			}}
		>
			<Typography sx={{ fontSize: '10rem', align: 'center' }}>Hello</Typography>
		</Box>
	)
}

export default HomePage
