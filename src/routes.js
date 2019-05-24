import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard'

export default (
  <Switch>
    <Route exact path='/' component={Auth}/>
    <Route path='/:id' component={()=>(
      <Nav>
        <Switch>
          <Route path='/:id/dashboard' component={Dashboard}/>
        </Switch>
      </Nav>
    )}/>
  </Switch>
)