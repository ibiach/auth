import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import { auth } from './components/firebase/firebase'
import * as ROUTES from './constants/routes'
import Layout from './layout/Layout'
import ChangePasswordPage from './pages/ChangePasswordPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotfoundPage from './pages/NotfoundPage'
import RegistrationPage from './pages/RegistrationPage'

export const ProtectedRoute = ({ user, children, redirect = ROUTES.LANDING }) => {
	if (!user) {
		return <Navigate to={redirect} replace />
	} else return children ? children : <Outlet />
}

const App = () => {
	const user = useSelector(state => state.auth.user)

	const dispatch = useDispatch()

	useEffect(() => {
		// auth.onAuthStateChanged(user => {
		// 	if (!user) {
		// 		dispatch(login(undefined))
		// 	}
		// })
	}, [auth, dispatch, user])

	return (
		<Box>
			<Routes>
				<Route path={ROUTES.LANDING} element={<Layout />}>
					<Route index element={<LoginPage />} />
					<Route path={ROUTES.OTHER} element={<NotfoundPage />} />
					<Route path={ROUTES.SIGN_IN} element={<LoginPage />} />
					<Route path={ROUTES.SIGN_UP} element={<RegistrationPage />} />
					<Route element={<ProtectedRoute user={user} />}>
						<Route path={ROUTES.PROFILE} element={<HomePage />} />
						<Route path={ROUTES.CHANGE_PASSWORD} element={<ChangePasswordPage />} />
					</Route>
				</Route>
			</Routes>
		</Box>
	)
}

export default App
