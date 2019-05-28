import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard'
import Semantic from './Components/Semantic'
import Other from './Components/Other'

export default (
  <Switch>
    <Route exact path='/' component={Auth}/>
    <Route path='/:id' component={()=>(
      <Nav>
        <Switch>
          <Route path='/:id/dashboard' component={Dashboard}/>
          <Route path='/:id/semantic' component={Semantic}/>
          <Route path='/:id/other' component={Other}/>
        </Switch>
      </Nav>
    )}/>
  </Switch>
)