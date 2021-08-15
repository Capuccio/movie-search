/** @format */

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import styled from 'styled-components'

import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

import Home from './pages/Home'
import Other from './pages/Other'

const Routes = () => {
	return (
		<AppContainer>
			<Navbar />
			<PageView>
				<SearchBar />
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
			</PageView>
		</AppContainer>
	)
}

export default Routes

const PageView = styled.div`
	width: 100%;
`
const AppContainer = styled.div`
	display: flex;
	overflow: auto;
	height: 100vh;
`
