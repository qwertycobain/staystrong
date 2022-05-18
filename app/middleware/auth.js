const jwt = require('jsonwebtoken')
const dontgo = require('../../config/secret.json')

module.exports = (req, res ,next) =>{
    const authHeader = req.headers.authorization

    if(!authHeader)
        return res.status(401).send({error: "no token provided"})
    
    const parts = authHeader.split(' ');

    if(!parts.length === 2)
        return res.status(401).send({error : "Token Error"})

    const [scheme, token] = parts

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error:"Token malformated "})
    
    jwt.verify(token, dontgo.secret, (err, decoded) =>{
        if(err) return res.status(401).send({error: 'Token Invalid'})
        req.userId = decoded.id
        return next()
    }) 
    

}



