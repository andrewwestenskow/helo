import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestUser } from '../ducks/reducer'
import { ClipLoader } from 'react-spinners'
import './Nav.css'
import axios from 'axios'


class Nav extends Component {

  state = {}

  componentDidMount() {
    this.props.requestUser()
  }

  logout = () => {
    axios.get(`/auth/logout`)
    this.props.history.push(`/`)
  }

  render() {

    const { id } = this.props.match.params


    return (
      <div className='nav-hold'>
        <nav className='Nav'>
          <Link to={`/${id}/dashboard`}>
            <h1>CHECK OUT WHAT I GOT</h1>
          </Link>
          {!this.props.picLoading ? <img className='profile-image' src={this.props.user.image} alt='profile' /> : <ClipLoader />}
          <ul className='nav-list'>

            <li><Link to={`/${id}/semantic`}>Semantic HTML & Redux</Link></li>
            <li><Link to={`/${id}/other`}>Other HTML Competencies</Link></li>
            <li><Link to={`${id}/server`}>Server Competencies</Link></li>

            <li onClick={this.logout}>Log Out</li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, { requestUser })(withRouter(Nav))