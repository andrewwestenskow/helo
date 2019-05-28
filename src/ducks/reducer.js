import axios from 'axios'

const initialState = {
  picLoading: false,
  artLoading: false,
  articles: [],
  user: {}
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
const REQUEST_USER = 'REQUEST_USER'

export const requestArticles = () => {
  let articles = axios.get('/api/articles')

  return{
    type: REQUEST_ARTICLES,
    payload: articles
  }
}

export const requestUser = () => {
  let user = axios.get('/api/user')

  return{
    type: REQUEST_USER,
    payload: user
  }
}

function reducer(state=initialState, action) {
  switch(action.type){
    case `${REQUEST_USER}_PENDING`:
      return {...state, picLoading: true}
    case `${REQUEST_USER}_FULFILLED`:
      return {...state, picLoading: false, user: action.payload.data}
    case `${REQUEST_USER}_REJECTED`: 
      return {...state, picLoading: false}
    case `${REQUEST_ARTICLES}_PENDING`:
      return {...state, artLoading: true}
    case `${REQUEST_ARTICLES}_FULFILLED`:
      return {...state, artLoading: false, articles: action.payload.data}
    case `${REQUEST_ARTICLES}_REJECTED`: 
      return {...state, artLoading: false}
    default: 
      return {...state}
  }
}

export default reducer

