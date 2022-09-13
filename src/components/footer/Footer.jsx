import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

export default function StickyFooter() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				position: 'absolute',
				left: 0,
				bottom: 0,
				width: '100%',
			}}
		>
			<CssBaseline />
			<Box
				component='footer'
				sx={{
					py: 3,
					px: 2,
					mt: 'auto',
				}}
			>
				<Container maxWidth='sm'>
					<Typography variant='body1' align='center'>
						IBIACH
					</Typography>
				</Container>
			</Box>
		</Box>
	)
}
