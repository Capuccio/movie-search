/** @format */

import React from 'react'

import styled from 'styled-components'

import { IoStatsChart } from 'react-icons/io5'

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

const MovieInfoContainer = styled.div`
	margin-top: 15px;
`

const MovieInfoTitle = styled.div`
	margin-bottom: 5px;
`

const MovieInfoValueContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;
`

const MovieInfoValue = styled.div`
	font-size: 28px;
	margin-left: 14px;
`
