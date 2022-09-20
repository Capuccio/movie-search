/** @format */

import React from 'react'

import styled from 'styled-components'

import { lenghtConvert } from '../utilities'

export default function Length(props) {
	return (
		<MovieInfoContainer>
			<MovieInfoTitle>Length</MovieInfoTitle>
			<MovieInfoValue>{lenghtConvert(props.length)}</MovieInfoValue>
		</MovieInfoContainer>
	)
}

const MovieInfoContainer = styled.div`
	margin-top: 15px;
`

const MovieInfoTitle = styled.div`
	margin-bottom: 5px;
`

const MovieInfoValue = styled.div`
	font-weight: bold;
`
