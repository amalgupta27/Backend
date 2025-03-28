const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
   res.send('Twitter API Endpoint')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.get('/account', (req, res) => {
    res.send('<h2>User Account</h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})