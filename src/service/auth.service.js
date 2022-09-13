const API_URL = 'http://localhost:3000/signin'

const register = async (email, password) => {
	console.log({ email, password })
	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const json = await response.json()
		console.log(json)
		// localStorage.setItem('user', json)
		console.log('Succes:', JSON.stringify(json))
	} catch (error) {
		console.error('Error:', error)
	}
}

const login = (email, password) =>
	fetch(API_URL, {
		method: 'POST',
		body: JSON.stringify({
			email,
			password,
		}),
	})
		.then(response => {
			if (!response.ok) throw Error(response.statusText)
			return response.json()
		})
		.then(response => {
			if (response.data.accessToken) {
				localStorage.setItem('user', JSON.stringify(response.data))
			}
		})
		.catch(error => console.log(error))

const logout = () => {
	localStorage.removeItem('user')
}

const authService = {
	register,
	login,
	logout,
}

export default authService
