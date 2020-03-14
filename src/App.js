import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/admin' component={Admin}/>
        <Redirect to='/login'/>
      </Switch>
    )
  }
}
