/** @format */

import React from 'react'

import { IoStatsChart } from 'react-icons/io5'

import {
	MovieInfoContainer,
	MovieInfoTitle,
	MovieInfoValueContainer,
	MovieInfoValue,
} from './style'

export default function BoxOffice(props) {
	return (
		<MovieInfoContainer>
			<MovieInfoTitle>Box Office</MovieInfoTitle>
			<MovieInfoValueContainer>
				<IoStatsChart size={16} />
				<MovieInfoValue>{props.boxOffice}</MovieInfoValue>
			</MovieInfoValueContainer>
		</MovieInfoContainer>
	)
}
