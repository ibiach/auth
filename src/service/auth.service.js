import { auth } from '../components/firebase/firebase'
import { wait } from '../utils/wait'

const register = async (email, password, delay = 2000) => {
	const signUp = new Promise((resolve, reject) => {
		const response = auth.createUserWithEmailAndPassword(email, password)

		if (response) {
			resolve(response)
		} else {
			reject(response.errorMessage)
		}
	})

	const responseWithDelay = await Promise.all([signUp, wait(delay)])

	const [response] = responseWithDelay

	return await response
}

const login = async (email, password, delay = 2000) => {
	const signIn = new Promise((resolve, reject) => {
		const response = auth.signInWithEmailAndPassword(email, password)

		if (response) {
			resolve(response)
		} else {
			reject(response.errorMessage)
		}
	})

	const responseWithDelay = await Promise.all([signIn, wait(delay)])

	const [response] = responseWithDelay

	return await response
}
const logout = () => auth.signOut()

const authService = {
	register,
	login,
	logout,
}

export default authService
