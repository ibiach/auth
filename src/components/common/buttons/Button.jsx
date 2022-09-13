import React, { memo } from 'react'
import { Button as MuiButton } from '@mui/material'

const Button = ({ children, loading, type, sx, variant, handle }) => {
	return (
		<MuiButton
			sx={sx}
			fullWidth
			type={type}
			onClick={handle}
			variant={variant}
			disabled={loading}
		>
			{children}
		</MuiButton>
	)
}

export default memo(Button)
