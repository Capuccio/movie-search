/** @format */

import styled from 'styled-components'

export const DetailContainer = styled.div`
	display: grid;
	grid-template-columns: 73% auto;
	grid-gap: 5%;
	margin-left: 2%;
`

export const DetailColumn = styled.div`
	margin-top: ${(props) => props.marginTop};
`

export const MovieRating = styled.div`
	margin-top: 75px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const GeneralRating = styled.div`
	text-align: center;
	font-size: 28px;
	width: 120px;
`

export const BarWrapper = styled.div`
	position: relative;
	width: ${(props) => props.theWidth || '76%'};
	border-radius: 20px;
	background-color: #f4f4f4;
`

export const ReviewRatingBar = styled.div`
	position: relative;
	height: 5px;
	width: ${(props) =>
		props.ratio.includes('.') ? props.ratio.split('.').join('').concat('%') : props.ratio};
	border-radius: 20px;
	background-color: ${(props) => props.color || '#3762f2'};
`

export const ReviewHeartIcon = styled.div`
	width: 6%;
	padding: 14px 14px 10px 14px;
	background-color: white;
	border-radius: 15px 0 15px 0;
	box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.4);
	text-align: center;
`

export const Actors = styled.div`
	margin-top: 60px;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	& > div {
		margin-left: 80px;
	}
	& > div:hover {
		cursor: default;
		border-radius: 0;
		box-shadow: 0 0 0 0;
	}
`

export const iconHeartStyle = {
	color: '#416df2',
	fontSize: '40px',
}
