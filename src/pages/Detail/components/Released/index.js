/** @format */

import React from 'react'

import { MovieInfoContainer, MovieInfoTitle, MovieInfoValue } from './style'

export default function Released(props) {
	return (
		<MovieInfoContainer>
			<MovieInfoTitle>Initial Release</MovieInfoTitle>
			<MovieInfoValue>{props.date}</MovieInfoValue>
		</MovieInfoContainer>
	)
}
