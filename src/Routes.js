/** @format */

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import styled from 'styled-components'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Other from './pages/Other'

const Routes = () => {
	return (
		<AppContainer>
			<Navbar />
			<Background>
				<BrowserRouter>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/other'>
							<Other />
						</Route>
					</Switch>
				</BrowserRouter>
			</Background>
		</AppContainer>
	)
}

export default Routes

const Background = styled.div`
	background-color: rgba(11, 23, 68, 255);
	width: 100%;
`
const AppContainer = styled.div`
	display: flex;
	align-items: stretch;
`
