import React from 'react'

const Article = props => {
  const {article} = props

  return <>
    <h1>Album Review</h1>
    <span>Read it</span>  <span>Do it, read it</span>
    <h2>{article.title}</h2>
    <article>
      <p>{article.body}</p>
    </article>
  </>
}

export default Article

