/** @format */

import { useState, useEffect } from 'react'

export default function useFetch() {
	const [loading, setLoading] = useState(true)

	const callEndpoint = async (endpoint) => {
		setLoading(true)
		let result = {}
		try {
			result = await endpoint
		} catch (error) {
			throw error
		}
		setLoading(false)
		return result.json()
	}

	const abortFetch = () => {
		setLoading(false)
	}

	useEffect(() => {
		return () => abortFetch()
	}, [])

	return { loading, callEndpoint }
}
