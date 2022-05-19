const express = require('express')
const res = require('express/lib/response')
const bcrypt = require('bcryptjs')
const User = require('../../models')
const jwt = require('jsonwebtoken')
const router = express.Router()
const config = require('../config/secret.json')

function geratoken(params= {}){
	return jwt.sign(params, config.secret,{
		expiresIn: 86400
	})
}

router.post('/register', async  (req, res)=>{
	var {email} = req.body
	try{
		if(await User.findOne({email}))
			return res.status(400).send({error: "User Already Exists"})
	
	const user = await User.create(req.body)
	user.pass = undefined
	
	return res.send({ 
		user, 
		token: geratoken({id: user.id})
		})

	} catch(err){

		return res.status(400).send({error:"registration failed !"})
	}
 
})

router.post('/authenticate', async (req, res) =>{
	const {email, pass} = req.body

	const user =  await User.findOne({email}).select('+pass')

	if (!user)
		return res.status(400).send({ error: "User Not Found"})
	
	if(!await bcrypt.compare (pass, user.pass))
		return res.status(400).send({error: "Invalid Password"})
	user.pass = undefined

	res.send({user, token: geratoken({id: user.id})})
	})

module.exports = app => app.use('/auth', router)    