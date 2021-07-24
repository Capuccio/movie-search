/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const App = () => (
	<>
		<Link to='/other'>Other</Link>
		<Message msgColor='blue'>Con props</Message>
		<Message>Sin props</Message>
	</>
)

export default App

const Message = styled.h1`
	font-size: 1.5rem;
	text-align: center;
	color: ${(props) => (props.msgColor ? props.msgColor : 'palevioletred')};
`
