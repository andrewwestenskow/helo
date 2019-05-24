import React, {Component} from 'react'

export default class Nav extends Component {

  render(){
    return(
      <div>
        Nav
        {this.props.children}
      </div>
    )
  }
}