/** @format */

import React from 'react'
import { useHistory } from 'react-router-dom'

import { IoSearchOutline } from 'react-icons/io5'

import { useFetch } from '../hooks'
import { getMovies } from '../services'
import {
	SearchBarContainer,
	InputSearch,
	SearchListContainer,
	SearchListItem,
	searchIcon,
} from './styles'

const SearchBar = () => {
	const history = useHistory()
	const { loading, callEndpoint } = useFetch()
	const [state, setState] = React.useState([])

	const searchInputMovie = async (movie) => {
		let data = await callEndpoint(getMovies(movie.target.value))
		if (!('Error' in data)) {
			setState(data.Search)
		}
	}

	const handleRedirectDetail = (item) => {
		setState([])
		history.push(`/detail/${item.imdbID}`)
	}

	return (
		<div style={{ border: '1px solid none', marginBottom: '2%' }}>
			<SearchBarContainer>
				<IoSearchOutline style={searchIcon} />
				<InputSearch placeholder='Search...' type='text' onChange={searchInputMovie} />
			</SearchBarContainer>
			<SearchListContainer haveData={state}>
				{state.map((movie, index) => (
					<SearchListItem onClick={() => handleRedirectDetail(movie)} key={index}>
						{movie.Title}
					</SearchListItem>
				))}
			</SearchListContainer>
		</div>
	)
}

export default SearchBar
