const express = require('express')
const app = express()

const data = {
    'phol':5,
    'bas':5
}
app.get('/data', (req, res) => {
    res.status(200).json(data)
})

app.get('/remove/:name', (req, res) => {
    data[req.params.name] -= 1
    res.status(200).json(data)
})

app.listen(8080,()=>{
    console.log('start localhost:8080')
})