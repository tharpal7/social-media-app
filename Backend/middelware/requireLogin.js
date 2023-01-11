const jwt = require ('jsonwebtoken')
const {Jwt_secret} = require ("../keys")
const mongoose = require ("mongoose")
const USER = mongoose.model("USER")

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error:"Yon must have Logged in first 1"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,Jwt_secret,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"Yon must have Logged in first 2"})
        }
        const {_id} = payload
        USER.findById(_id).then(userData=>{            
            req.user = userData
            next()
        })
    })
    
}