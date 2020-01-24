const {User}=require('../models/user')
const _ =require('lodash')
module.exports.register=(req,res)=>{
    console.log("hii")
    const body=req.body
    const user=new User(body)

    user.save()
    .then((user)=>{
        console.log("user at registration",user)
        res.json(user)
    })
    .catch((err)=>{
        console.log("err",err)
        res.send(err)
    })
}

module.exports.login=(req,res)=>{
    const body=req.body
   User.findByCredentials(body.email,body.password)
   .then(function(user){
       return user.generateToken()
   })
   .then(function(token){
console.log("token",token)
    //res.send({token})
 res.send({'token':token})
    // res.setHeader('x-auth',token).send({})
   })
   .catch(function(err){
       res.send({'errors':err})
   })
}

module.exports.account=(req,res)=>{
//const user=req.user
   const user=_.pick(req.user,["_id","userName","email","tokens"])
    res.send(user)
}
module.exports.logout=(req,res)=>{
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(()=>{
        res.send({notice:'successfully logged out'})
    })
    .catch((err)=>{
        res.send(err)
    })
}