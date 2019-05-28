import React, {Component} from 'react'
import './Servers.css'

class Servers extends Component {

  state={
    image: 'https://i.ytimg.com/vi/ThZmq4O7DSU/hqdefault.jpg',
    words: ['none'],
    imageSearch: '',
    wordSearch: ''
  }

  searchImage = () => {

  }

  searchWords = () => {

  }

  updateInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div className='servers'>
        <form onSubmit={this.searchImage} className="image-search">
          <h1>FIND A USER'S FAVORITE IMAGE</h1>
          <input onChange={this.updateInputs} name='imageSearch' value={this.state.imageSearch} placeholder='name' type="text"/>
          <button type='submit'>Search</button>

        </form>
          <img className='favorite-image' src={this.state.image} alt=""/>
        <form onSubmit={this.searchWords}>
          <h1>FIND A USER'S FAVORITE WORDS</h1>
          <input onChange={this.updateInputs} name='wordSearch' value={this.state.wordSearch} placeholder='name' type="text"/>
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default Servers