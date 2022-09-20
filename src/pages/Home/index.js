/** @format */

import React, { useState } from 'react'

import Billboard from '../../components/Billboard'

import { useAsync, useFetch } from '../../hooks'
import { moviesName } from './utilities'
import { getMovies } from '../../services'

import { HomeContainer, HomeLink } from './style'

const App = () => {
	const { loading, callEndpoint } = useFetch()
	const [movies, setMovies] = useState(new Array(10).fill(0, 0))

	const apiMovies = async () =>
		await callEndpoint(getMovies(moviesName[Math.floor(Math.random() * 13)]))

	const updateMovies = (response) => !('Error' in response) && setMovies(response.Search)

	useAsync(apiMovies, updateMovies, () => {})

	return (
		<HomeContainer>
			{movies.map((movie, index) => (
				<HomeLink to={`/detail/${movie.imdbID}`} key={index}>
					<Billboard
						key={index}
						loading={loading}
						src={
							movie.Poster !== 'N/A'
								? movie.Poster
								: 'https://www.nxp.com/assets/images/en/logos-internal/image-not-available.svg'
						}>
						{movie.Title}
					</Billboard>
				</HomeLink>
			))}
		</HomeContainer>
	)
}

export default App
