const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const chef = require('./data/chef.json')

app.use(cors())

app.get('/',(req,res) =>{
    res.send('chef client is running')
})

app.get('/chef',(req,res) =>{
    res.send(chef)
})

app.get('/chef/:id',(req,res) => {
    const id = parseInt(req.params.id )
    console.log(id)
    const chefData = chef.find(n => parseInt(n.id) === id)
    res.send(chefData)
    console.log(chefData)
})

app.listen(port,() =>{
    console.log(`Chef Server API is running on port : ${port}`)
})