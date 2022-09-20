/** @format */

import React from 'react'

import styled from 'styled-components'

import { colors, ratingConvert } from '../utilities'
import { BarWrapper } from '../style'

export default function ReviewRating(props) {
	const ratingNumber = props.rating.Value.includes('/')
		? props.rating.Value.split('/')[0]
		: props.rating.Value
	const numberOf = props.rating.Value.includes('/') ? props.rating.Value.split('/')[1] : undefined

	return (
		<ReviewRatingContainer>
			<ReviewRatingNumber>
				{ratingNumber}
				{numberOf && <ReviewRatingNumberOf>/{numberOf}</ReviewRatingNumberOf>}
			</ReviewRatingNumber>
			<ReviewRatingName>{props.rating.Source}</ReviewRatingName>
			<BarWrapper>
				<ReviewRatingBar
					ratio={
						props.rating.Value.includes('/') ? props.rating.Value.split('/')[0] : props.rating.Value
					}
					color={colors[props.position]}
				/>
			</BarWrapper>
		</ReviewRatingContainer>
	)
}

export const ReviewRatingContainer = styled.div`
	width: 18%;
`

export const ReviewRatingNumber = styled.span`
	font-weight: bold;
	font-size: 40px;
`

export const ReviewRatingNumberOf = styled.span`
	font-size: calc(100% - 70%);
	font-weight: normal;
`

export const ReviewRatingName = styled.div`
	font-size: 14px;
	color: #bcbcbc;
	margin-bottom: 8px;
`

export const ReviewRatingBar = styled.div`
	position: relative;
	height: 5px;
	width: ${(props) => ratingConvert(props.ratio)};
	border-radius: 20px;
	background-color: ${(props) => props.color || '#3762f2'};
`
