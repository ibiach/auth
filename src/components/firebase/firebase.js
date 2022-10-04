import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
	appId: process.env.REACT_APP_APP_ID,
	apiKey: process.env.REACT_APP_API_KEY,
	projectId: process.env.REACT_APP_PROJECT_ID,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
})

export const auth = app.auth()
export default app
