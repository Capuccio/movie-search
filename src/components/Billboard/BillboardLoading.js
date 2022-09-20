/** @format */

import React from 'react'

import styled, { keyframes } from 'styled-components'

import BillboardContainer from './BillboardContainer'

const BillboardLoading = () => {
	return (
		<BillboardContainer>
			<BillboardImgLoading />
		</BillboardContainer>
	)
}

export default BillboardLoading

const shine = keyframes`
		to {
			background-position: right -40px top 0;
		}
`

const BillboardImgLoading = styled.div`
	height: 220px;
	width: 100%;
	max-width: 140px;
	border-radius: 10px;
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
