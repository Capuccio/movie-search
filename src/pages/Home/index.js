/** @format */

import React from 'react'

import styled from 'styled-components'

import Billboard from '../../components/Billboard'

const App = () => (
	<>
		{/** 
		<Message msgColor='blue'>Con props</Message>
		<Message>Sin props</Message>
*/}
		<div
			style={{
				textAlign: 'center',
				display: 'grid',
				gridTemplateColumns: 'auto auto auto auto auto',
				gridRowGap: '14px',
				margin: '15px 10px 0 10px',
			}}>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((movie, index) => (
				<Billboard
					key={index}
					billboardImage='https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jp'
					billBoardTitle='Fast & Furious 7'
				/>
			))}
		</div>
	</>
)

export default App

const Message = styled.h1`
	font-size: 1.5rem;
	text-align: center;
	color: ${(props) => (props.msgColor ? props.msgColor : 'palevioletred')};
`
