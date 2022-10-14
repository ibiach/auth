import { useEffect, useState } from 'react'

const useShowMessage = (message, isLoading) => {
	const [showMessage, setShowMesage] = useState(false)

	useEffect(() => {
		if (message) {
			setShowMesage(true)
		}

		const timerMessage = setTimeout(() => setShowMesage(false), 4000)

		return () => clearInterval(timerMessage)
	}, [message, isLoading])

	return showMessage
}

export default useShowMessage
