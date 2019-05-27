import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Nav.css'
import axios from 'axios'


const Nav = props => {


  const {id} = props.match.params

  function logout () {
    axios.get(`/auth/logout`)
    props.history.push(`/`)
  }


  return (
    <div className='Nav'>
      <nav>
        <Link to={`/${id}/dashboard`}>
          <h1>CHECK OUT WHAT I GOT</h1>
        </Link>
        <ul>
          <Link to={`/${id}/semantic`}>
            <li>Semantic HTML</li>
          </Link>
          <Link to={`/${id}/other`}>
            <li>Other HTML Competencies</li>
          </Link>
          <Link to={`${id}/server`}>
            <li>Server Competencies</li>
          </Link>
          <li onClick={() => logout()}>Log Out</li>
        </ul>
      </nav>
      {props.children}
    </div>
  )
}

export default withRouter(Nav)