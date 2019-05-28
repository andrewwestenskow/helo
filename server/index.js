const express = require('express')
const app = express()
require('dotenv').config()
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const Ctrl = require('./controller')
const Middleware = require('./middlewares')

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.post('/auth/register', Ctrl.register)
app.post('/auth/login', Ctrl.login)
app.get('/auth/logout', Ctrl.logout)
app.get('/api/articles', Ctrl.getArticles)
app.get('/api/user', Ctrl.getUser)
app.get('/api/picture', Middleware.checkUser, Ctrl.getFavoritePicture )
app.get('/api/words', Middleware.checkUser, Ctrl.getFavoriteWords)


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log(`That dern db is set son`)
  // console.log(`TABLES: ${db.listTables()}`)
  app.listen(SERVER_PORT, () => console.log(`Look pa, I'm a server ${SERVER_PORT}`))
})