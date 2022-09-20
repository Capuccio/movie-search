/** @format */

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import styled from 'styled-components'

import { Navbar, SearchBar } from './components'

import Home from './pages/Home'
import Other from './pages/Other'
import Detail from './pages/Detail'

const Routes = () => (
	<BrowserRouter>
		<AppContainer>
			<Navbar />
			<PageView>
				<SearchBar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/detail/:id'>
						<Detail />
					</Route>
					<Route exact path='/other'>
						<Other />
					</Route>
					<Route path='*'>
						<p>
							Debe seleccionar una película en el Home o utilizar el buscador para ver el detalle de
							la misma.
						</p>
					</Route>
				</Switch>
			</PageView>
		</AppContainer>
	</BrowserRouter>
)

export default Routes

const PageView = styled.div`
	width: 100%;
	margin-left: 9%;
`
const AppContainer = styled.div`
	display: flex;
	overflow: auto;
`
