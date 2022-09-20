/** @format */

import { useEffect } from 'react'

export default function useAsync(
	callEndpointFunction,
	successFunction,
	returnFunction,
	dependencies = []
) {
	useEffect(() => {
		let mounted = true
		callEndpointFunction().then((result) => {
			if (mounted) successFunction(result)
		})
		return () => {
			returnFunction && returnFunction()
			mounted = false
		}
	}, dependencies)
}
