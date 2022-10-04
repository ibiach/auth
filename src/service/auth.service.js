import { auth } from '../components/firebase/firebase'

const register = (email, password) => auth.createUserWithEmailAndPassword(email, password)

const login = (email, password) => auth.signInWithEmailAndPassword(email, password)

const logout = user => auth.logout(user)

const authService = {
	register,
	login,
	logout,
}

export default authService
