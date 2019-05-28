import React, { Component } from 'react'
import Article from './Article'
import { connect } from 'react-redux'
import {requestArticles} from '../ducks/reducer'
import './Semantic.css'

class Semantic extends Component {


  componentDidMount() {
    this.props.requestArticles()
  }

  render() {


    return (
      <div className='semantic'>
        <section className="reviews">

          {!this.props.artLoading ? this.props.articles.map(article => <Article key={article.article_id} article={article}/>) : <div className="sonic-hold">
            <img src='https://media.giphy.com/media/13nN1XlbXhqqTC/giphy.gif' alt='sonic'/>
          </div>}

        </section>

        <section className="images">
          <h1>Some fun pictures</h1>
          <img style={{ margin: 0 }} src="http://robohash.org/asdflk;" alt="robot" className="profile-image" />
          <img style={{ margin: 0 }} src="http://robohash.org/asdffffflk;" alt="robot" className="profile-image" />
          <img style={{ margin: 0 }} src="http://robohash.org/as234324dflk;" alt="robot" className="profile-image" />
          <img style={{ margin: 0 }} src="http://robohash.org/asdffdsaflk;" alt="robot" className="profile-image" />
          <img style={{ margin: 0 }} src="http://robohash.org/as999999dflk;" alt="robot" className="profile-image" />
          <img style={{ margin: 0 }} src="http://robohash.org/as9999asdf99dflk;" alt="robot" className="profile-image" />
        </section>

        <footer className="s-footer">
          Yo wassup this is the footer
      </footer>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default connect(mapStateToProps, {requestArticles})(Semantic)