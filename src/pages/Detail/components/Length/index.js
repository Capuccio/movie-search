/** @format */

import React from 'react'

import MovieLengthConvert from '../../../../functions/MovieLengthConvert'

import { MovieInfoContainer, MovieInfoTitle, MovieInfoValue } from './style'

export default function Length(props) {
	return (
		<MovieInfoContainer>
			<MovieInfoTitle>Length</MovieInfoTitle>
			<MovieInfoValue>{MovieLengthConvert(props.length)}</MovieInfoValue>
		</MovieInfoContainer>
	)
}
