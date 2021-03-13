const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const FakeDb = require('./fake-db')

const productsRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    if(process.env.NODE_ENV !== 'production') {
      const fakeDb = new FakeDb()
      // fakeDb.initDb()
    }
  }
)

const app = express()

app.use('/api/v1/products', productsRoutes)

if(process.env.NODE_ENV === 'production') {
  const appPath = path.join( __dirname, '..', 'dist', 'reservation-app')
  app.use(express.static(appPath))
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}


const PORT = process.env.PORT || '3001'

app.listen('3001', function() {
  console.log('I am running!')
})
