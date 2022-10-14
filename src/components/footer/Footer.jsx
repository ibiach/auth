import * as React from 'react'
import { Copyright } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import { grey } from '@mui/material/colors'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

const Footer = () => {
	return (
		<Box
			sx={{
				py: 2,
				left: 0,
				bottom: 0,
				mt: 'auto',
				width: '100%',
				display: 'flex',
				position: 'absolute',
				flexDirection: 'column',
				backgroundColor: grey[200],
			}}
		>
			<CssBaseline />

			<Container maxWidth='lg'>
				<Grid
					container
					spacing={0}
					direction='row'
					alignItems='center'
					justifyContent='center'
				>
					<Typography variant='caption' align='center'>
						IBIACH
					</Typography>
					<Copyright style={{ marginLeft: '2px', width: '12px' }} />
				</Grid>
			</Container>
		</Box>
	)
}

export default Footer
