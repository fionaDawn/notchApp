const express = require('express')
const cors = require('cors');
const app = express()
const port = 3002
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/products', (req, res) => {
    const data = require('./data/products.json')
    const respData = req.query.search ? data.filter(d => d.name.toLowerCase().startsWith(req.query.search.toLocaleLowerCase())) : data;
    res.send(respData)
})

module.exports = app;