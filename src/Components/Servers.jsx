import React, {Component} from 'react'
import './Servers.css'
import axios from 'axios'

class Servers extends Component {

  state={
    image: 'https://i.ytimg.com/vi/ThZmq4O7DSU/hqdefault.jpg',
    words: [{word: 'none'}],
    imageSearch: '',
    wordSearch: ''
  }

  searchImage = async (e) => {
    e.preventDefault()
    const username = this.state.imageSearch
    let image = await axios.get(`/api/picture?username=${username}`)
    console.log(image.data.image_url)
    this.setState({
      imageSearch: '',
      image: image.data.image_url
    })
  }

  searchWords = async (e) => {
    e.preventDefault()
    const username = this.state.wordSearch
    let words = await axios.get(`/api/words?username=${username}`)
    console.log(words.data)
    this.setState({
      wordSearch: '',
      words: words.data
    })
  }

  updateInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div className='servers'>
        <form onSubmit={(e) => this.searchImage(e)} className="image-search">
          <h1>FIND A USER'S FAVORITE IMAGE</h1>
          <input onChange={this.updateInputs} name='imageSearch' value={this.state.imageSearch} placeholder='name' type="text"/>
          <button type='submit'>Search</button>

        </form>
          <img className='favorite-image' src={this.state.image} alt=""/>
        <form onSubmit={(e) => this.searchWords(e)}>
          <h1>FIND A USER'S FAVORITE WORDS</h1>
          <input onChange={this.updateInputs} name='wordSearch' value={this.state.wordSearch} placeholder='name' type="text"/>
          <button type='submit'>Search</button>
        </form>

        <ul>
          {this.state.words.map(word => {
            return <li key={word.word}>{word.word}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Servers