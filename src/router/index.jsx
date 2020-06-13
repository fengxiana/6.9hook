import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Registe, Home } from './assembly'



export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/registe" component={Registe} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}
