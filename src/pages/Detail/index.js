/** @format */

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoHeartOutline } from 'react-icons/io5'

import Billboard from '../../components/Billboard'

import Poster from './components/Poster'
import Genres from './components/Genres'
import Released from './components/Released'
import Director from './components/Director'

import { Title, MoviePlot, ReviewRating, Length, BoxOffice } from './components'
import { useFetch, useAsync } from '../../hooks'
import { getMovieDetail } from '../../services'

import {
	DetailContainer,
	DetailColumn,
	MovieRating,
	GeneralRating,
	ReviewRatingBar,
	BarWrapper,
	ReviewHeartIcon,
	Actors,
	iconHeartStyle,
} from './style'

const Detail = () => {
	const { id } = useParams()
	const { loading, callEndpoint } = useFetch()
	const [movie, setMovie] = useState({
		Actors: 'A, B, C',
		Genre: 'Action, Adventure, Comedy',
		Runtime: '130 min',
	})

	const getApiData = async () => callEndpoint(getMovieDetail(id))

	const updateData = (result) => setMovie(result)

	useAsync(getApiData, updateData, () => {}, [id])

	return (
		<DetailContainer>
			<DetailColumn span={6}>
				<Title loading={loading}>{movie.Title}</Title>
				<MoviePlot loading={loading}>{movie.Plot}</MoviePlot>
				<MovieRating>
					<GeneralRating>
						9.8
						<BarWrapper theWidth='100%'>
							<ReviewRatingBar ratio='8.5' />
						</BarWrapper>
					</GeneralRating>
					{movie.Ratings?.map((rating, index) => (
						<ReviewRating key={index} position={index} theLoader={loading} rating={rating} />
					))}
					<ReviewHeartIcon>
						<IoHeartOutline style={iconHeartStyle} />
					</ReviewHeartIcon>
				</MovieRating>
				<Actors>
					{movie.Actors.split(', ').map((actor, index) => (
						<Billboard
							loading={loading}
							key={index}
							src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'>
							{actor}
						</Billboard>
					))}
				</Actors>
			</DetailColumn>
			<DetailColumn marginTop='-31%' span={2}>
				<Poster poster={movie.Poster} />
				<Genres genres={movie.Genre.split(', ')} />
				<Released date={movie.Released} />
				<Length length={movie.Runtime.split(' ')} />
				<Director director={movie.Director} />
				<BoxOffice boxOffice={movie.BoxOffice} />
			</DetailColumn>
		</DetailContainer>
	)
}

export default Detail
