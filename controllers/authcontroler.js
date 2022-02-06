const express = require('express');

const User = require('../user/user');

const rota = express.Router();

rota.post('/register', async (req, res)=>{
  try{
    const user = await User.create(req.body);
    return res.send({ user });
    
  
  }catch(err){ 
    return res.status(400).send({error : "Registration failed "})
  }

});



