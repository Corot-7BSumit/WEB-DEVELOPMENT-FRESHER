const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    //Fetch how many users enrolled from the database.
    
    let users = ["Sumit", "Shuvam", "Sambit"]
    res.render("index", {users: users})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})