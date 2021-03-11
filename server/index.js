const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')

const productsRoutes = require('./routes/products')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    const fakeDb = new FakeDb()
    fakeDb.initDb()
  }
)

const app = express()

app.use('/api/v1/products', productsRoutes)

const PORT = process.env.PORT || '3001'

app.listen('3001', function() {
  console.log('I am running!')
})
