const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
app.use(cors())
const categories = require('./data/categories.json')
app.get('/', (req, res) => {
    res.send('Welcome to the server')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.listen(port, (req, res) => {
    console.log('listening on port', port)
});