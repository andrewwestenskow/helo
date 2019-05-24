import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './Auth.css'

class Auth extends Component {

  state = {
    username: '',
    password: '',
  }

  handleUpdateForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegister = async () => {
    const { username, password } = this.state

    try {
      let user = await axios.post('/auth/register', { username, password })
      this.props.history.push(`/${user.data.helo_login_id}/dashboard`)
    } catch (error) {
      console.log(error)
    }
  }

  handleLogin = async () => {
    const { username, password } = this.state

    try {
      let user = await axios.post('/auth/login', { username, password })
      this.props.history.push(`${user.data.helo_login_id}/dashboard`)
    } catch (error) {
      console.log(error)
    }
  }

  toggleButtons = () => {
    this.setState({
      toggleButtons: !this.state.toggleButtons
    })
  }



  render() {
    return (
      <div className='Auth'>
        <header className='header'>THIS IS A HEADER WITH FIXED POSITIONING</header>
        <div className='login-hold'>
          <input className='login-input' type="text" name='username' value={this.state.username} onChange={this.handleUpdateForm} placeholder='username' />
          <input className='login-input' type="password" name='password' value={this.state.password} onChange={this.handleUpdateForm} placeholder='password' />
          <button className='login-button' onClick={this.handleLogin}>Log In</button>
          <button disabled={this.state.buttonsDisabled} className='login-button' onClick={this.handleRegister}>Register</button>
          <button className='login-button' disabled>YOU CAN'T CLICK THIS</button>
        <div id="id">
          <p className='floatright'>FLOATING RIGHT PTAG</p>
          <p className='text-effects'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaWORD BREAKSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <p className='floatleft'>FLOATING LEFT PTAG</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="ellipsis">aaaaaaaaaELLIPSISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

        </div>
        <div className="flex-wrap">
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box">FLEX WRAP</div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
          <div className="wrap-box"></div>
        </div>
        </div>
        <div className='footer'>THIS IS A DIV POSITIONED ABSOLUTELY TO THE BOTTOM OF THE AUTH COMPONENT WHICH ITSELF IS POSITIONED RELATIVELY</div>
      </div>
    )
  }
}

export default withRouter(Auth)