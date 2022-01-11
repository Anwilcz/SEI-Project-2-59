import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CoinIndex from './components/CoinIndex'
import CoinShow from './components/CoinShow'
import Exchanges from './components/Exchanges'



const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/seeall' component={CoinIndex} />
        <Route exact path='/coins/:id' component={CoinShow} />
        <Route exact path='/exchanges' component={Exchanges} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
