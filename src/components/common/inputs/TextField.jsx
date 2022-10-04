import React from 'react'
import { TextField as MuiTextField } from '@mui/material'

const TextField = ({ ...otherProps }) => {
	return <MuiTextField {...otherProps} />
}

export default TextField
