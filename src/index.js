/** @format */

import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './Routes'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Quicksand', sans-serif;
}
`

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Routes />
	</React.StrictMode>,
	document.getElementById('root')
)
