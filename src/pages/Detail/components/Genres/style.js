/** @format */

import styled from 'styled-components'

export const GenresContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 24px;
	& > div {
		margin-left: 10px;
	}
`

export const GenreBox = styled.div`
	border-radius: 5px;
	padding: 2px 15px;
	width: 50px;
	text-align: center;
	background-color: ${(props) =>
		props.bgcolor === 1
			? 'rgba(53, 98, 243, 0.6)'
			: props.bgcolor === 2
			? 'rgba(132, 190, 240, 0.6)'
			: 'rgba(253, 183, 36, 0.6)'};
	& > p {
		font-size: 11px;
		font-weight: bold;
		color: white;
	}
`
