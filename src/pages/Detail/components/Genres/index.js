/** @format */

import React from 'react'

import { GenresContainer, GenreBox } from './style'

export default function Genres(props) {
	return (
		<GenresContainer>
			{props.genres.map((genre, index) => (
				<GenreBox bgcolor={index} key={index}>
					<p>{genre}</p>
				</GenreBox>
			))}
		</GenresContainer>
	)
}
