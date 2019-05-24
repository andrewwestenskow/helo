const express = require('express')
const app = express()
const Ctrl = require('./controller')
require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log(`That dern db is set son`)
  console.log(`TABLES: ${db.listTables()}`)
  app.listen(SERVER_PORT, () => console.log(`Look pa, I'm a server ${SERVER_PORT}`))
})