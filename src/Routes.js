import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import styled from 'styled-components'

import Home from './pages/Home'
import Other from './pages/Other'

const Routes = () => {
  return (
  <Background>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/other">
          <Other />
        </Route>
      </Switch>
    </BrowserRouter>
  </Background>
  )
}

export default Routes

const Background = styled.div`
  background-color: rgba(11,23,68,255);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`
