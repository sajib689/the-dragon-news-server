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
})
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if(id === 0) {
        res.send(news)
    } else{
    const categoryNews = news.filter(n => parseInt(n.category_id) === id)
    res.send(categoryNews)
    }
    
})
app.listen(port, (req, res) => {
    console.log('listening on port', port)
});