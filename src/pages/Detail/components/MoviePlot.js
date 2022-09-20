/** @format */

import React from 'react'

import styled, { keyframes } from 'styled-components'

export default function MoviePlot(props) {
	if (props.loading)
		return (
			<>
				<DescriptionLoading />
				<DescriptionLoading />
				<DescriptionLoading />
			</>
		)
	return <MoviePlotContainer>{props.children}</MoviePlotContainer>
}

const shine = keyframes`
		to {
			background-position: right -40px top 0;
		}
`

export const MoviePlotContainer = styled.p`
	margin-top: 40px;
	color: rgba(135, 135, 135, 1);
`

const DescriptionLoading = styled.h1`
	height: 15px;
	width: 100%;
	background-color: #e2e5e7;
	background-image: linear-gradient(
		90deg,
		rgb(255, 255, 255, 0),
		rgba(255, 255, 255, 0.5),
		rgba(255, 255, 255, 0)
	);
	background-size: 40px 100%;
	background-repeat: no-repeat;
	background-position: left -40px top 0;
	animation: ${shine} 1s ease infinite;
`
