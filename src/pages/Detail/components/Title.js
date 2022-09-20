/** @format */

import React from 'react'

import styled, { keyframes } from 'styled-components'

export default function Title(props) {
	if (props.loading) return <TitleLoading />

	return <h1>{props.children}</h1>
}

const shine = keyframes`
		to {
			background-position: right -40px top 0;
		}
`

const TitleLoading = styled.h1`
	height: 42px;
	width: 40%;
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
