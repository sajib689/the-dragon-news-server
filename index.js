const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
app.use(cors())
const categories = require('./data/categories.json')
const news = require('./data/news.json')
app.get('/', (req, res) => {
    res.send('Welcome to the server')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
    console.log(id)
})
app.listen(port, (req, res) => {
    console.log('listening on port', port)
});