import React from 'react'
import { Box as MuiBox } from '@mui/system'

const Box = ({ children }) => {
	return (
		<MuiBox
			sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			{children}
		</MuiBox>
	)
}

export default Box
