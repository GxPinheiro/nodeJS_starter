const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
var jsonParser = bodyParser.json()

app.get('/', function (req, res) {
    res.send('hello world')
    console.log('sent');
})

app.post('/user', jsonParser,function (req, res) {
    const respondeBody = req.body

    res.send(`The Character name is ${respondeBody.firstName} ${respondeBody.lastName}`)
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))