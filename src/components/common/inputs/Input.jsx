import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid } from '@mui/material'

import { getEmail, getPassword, getSecondPassword } from '../../../store/slices/userSlice'

import InputEmail from './InputEmail'
import InputPassword from './InputPassword'

const Input = ({ form, isRegistration }) => {
	const dispatch = useDispatch()

	const handlerGetUserEmail = event => dispatch(getEmail(event.target.value))
	const handlerGetUserPassword = event => dispatch(getPassword(event.target.value))
	const handlerGetSecondUserPassword = event => dispatch(getSecondPassword(event.target.value))

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<InputEmail handlerGetUserEmail={handlerGetUserEmail} form={form} />
			</Grid>

			<Grid item xs={12}>
				<InputPassword handlerGetUserPassword={handlerGetUserPassword} form={form} />
			</Grid>

			{isRegistration && (
				<Grid item xs={12}>
					<InputPassword
						handlerGetUserPassword={handlerGetSecondUserPassword}
						form={form}
					/>
				</Grid>
			)}
		</Grid>
	)
}

export default Input
