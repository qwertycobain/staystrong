const express = require('express')
const bp = require('body-parser')
const app =  express()
const port = 4006;



app.use(bp.json())

app.use(bp.urlencoded({extended:false }))
require('../controllers')(app)


app.listen(port, ()=>{console.log('app listen on port: '+port)})


