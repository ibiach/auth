import React, { memo } from 'react'
import { Button as MuiButton, CircularProgress } from '@mui/material'

const Button = React.forwardRef(({ children, loading, ...otherProps }, ref) => {
	return (
		<MuiButton ref={ref} {...otherProps}>
			{loading ? <CircularProgress color='primary' size={24} /> : <span>{children}</span>}
		</MuiButton>
	)
})

export default memo(Button)
