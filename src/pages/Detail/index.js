/** @format */

import React from 'react'
import { useParams } from 'react-router-dom'
import { IoHeartOutline } from 'react-icons/io5'

import Billboard from '../../components/Billboard'
import Poster from './components/Poster'
import Genres from './components/Genres'
import Released from './components/Released'
import Length from './components/Length'
import Director from './components/Director'
import BoxOffice from './components/BoxOffice'

import {
	DetailContainer,
	DetailColumn,
	MoviePlot,
	MovieRating,
	GeneralRating,
	BarWrapper,
	ReviewRating,
	ReviewRatingNumber,
	ReviewRatingNumberOf,
	ReviewRatingName,
	ReviewRatingBar,
	ReviewHeartIcon,
	Actors,
	iconHeartStyle,
} from './style'

const Detail = () => {
	const { id } = useParams()

	return (
		<DetailContainer>
			<DetailColumn>
				<h1>HACKSAW RIDGE {id}</h1>
				<MoviePlot>
					Andrew Garfield, Sam Worthington, Luke Bracey", "Plot": "The true story of Desmond T.
					Doss, the conscientious objector who, at the Battle of Okinawa, was awarded the Medal of
					Honor for his incredible bravery and regard for his fellow soldiers. We see his upbringing
					and how this shaped his views, especially his religious view and anti-killing stance. We
					see Doss's trials and tribulations after enlisting in the US Army and trying to become a
					medic. Finally, we see the hell on Earth that was Hacksaw Ridge.
				</MoviePlot>
				<MovieRating>
					<GeneralRating>
						9.8
						<BarWrapper theWidth='100%'>
							<ReviewRatingBar ratio='8.5' />
						</BarWrapper>
					</GeneralRating>
					<ReviewRating>
						<ReviewRatingNumber>
							8.2<ReviewRatingNumberOf>/10</ReviewRatingNumberOf>
						</ReviewRatingNumber>
						<ReviewRatingName>IDMB</ReviewRatingName>
						<BarWrapper>
							<ReviewRatingBar ratio='2.5' color='#3562f3' />
						</BarWrapper>
					</ReviewRating>
					<ReviewRating>
						<ReviewRatingNumber>87%</ReviewRatingNumber>
						<ReviewRatingName>METACRITIC</ReviewRatingName>
						<BarWrapper>
							<ReviewRatingBar ratio='2.0' color='#84bef0' />
						</BarWrapper>
					</ReviewRating>
					<ReviewRating>
						<ReviewRatingNumber>71%</ReviewRatingNumber>
						<ReviewRatingName>ROTTEN TOMATOES</ReviewRatingName>
						<BarWrapper>
							<ReviewRatingBar ratio='71%' color='#fdb724' />
						</BarWrapper>
					</ReviewRating>
					<ReviewHeartIcon>
						<IoHeartOutline style={iconHeartStyle} />
					</ReviewHeartIcon>
				</MovieRating>
				<Actors>
					{'Vin Diesel, Paul Walker, Dwayne Johnson'.split(', ').map((actor, index) => (
						<Billboard
							key={index}
							billboardImage='https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jp'
							billBoardTitle={actor}
						/>
					))}
				</Actors>
			</DetailColumn>
			<DetailColumn marginTop='-28%'>
				<Poster />
				<Genres genres={'Action, Adventure, Comedy'.split(', ')} />
				<Released date='24 May 2013' />
				<Length length={'130 min'.split(' ')} />
				<Director director='Justin Lin' />
				<BoxOffice boxOffice='$238,679,850' />
			</DetailColumn>
		</DetailContainer>
	)
}

export default Detail
