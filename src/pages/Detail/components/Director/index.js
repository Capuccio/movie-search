/** @format */

import React from 'react'

import { MovieInfoContainer, MovieInfoTitle, MovieInfoValue } from './style'

export default function Director(props) {
	return (
		<MovieInfoContainer>
			<MovieInfoTitle>Director</MovieInfoTitle>
			<MovieInfoValue>{props.director}</MovieInfoValue>
		</MovieInfoContainer>
	)
}
