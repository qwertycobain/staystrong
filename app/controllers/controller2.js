const express = require('express')
const authmid = require('../middleware/auth')
const router = express.Router()

router.use(authmid)


router.get('/waitin4someaction', (req, res) =>{
    res.send({ok: "true", user: req.userId})
})

module.exports = app => app.use('/juicebox', router)
