import React from 'react'
import { Box as MuiBox } from '@mui/system'

const Box = ({ children, ...otherProps }) => {
	return (
		<MuiBox sx={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }} {...otherProps}>
			{children}
		</MuiBox>
	)
}

export default Box
