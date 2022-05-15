const express = require('express')

const User = require('../models')

const router = express.Router()

router.post('/register', async  (req, res)=>{
	var {email} = req.body
	try{
		if(await User.findOne({email}))
			return res.status(400).send({error: "User Already Exists"})
	
	const user = await User.create(req.body)
	user.pass = undefined
	
	return res.send({user})

	} catch(err){

		return res.status(400).send({error:"registration failed !"})
	}
 
})

module.exports = app => app.use('/auth', router)