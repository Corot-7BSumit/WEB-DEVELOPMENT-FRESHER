const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World! Sumit')
})

app.get('/about', (req, res) => {
    res.send('I am the about page!')
})

app.put('/', (req, res) => {
    res.send('Hello World! This is a put request')
})

app.post('/', (req, res) => {
    console.log(req.body)
    console.log(req.body.name)
    res.send('Hello World! This is a post request')
})

app.delete('/', (req, res) => {
    res.send('Hello World! This is a delete request')
})

//use the command: node --watch index.js to watch the code run live on web browser

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})