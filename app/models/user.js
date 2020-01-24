const mongoose=require('mongoose')
const validator=require('validator')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Schema=mongoose.Schema
const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    password:{
       type:String,
       required:true,
       maxlength:128,
       minlength:6

    },
    tokens:[
        {
            token:{
                type:String
            },
            createdAt:{
                type:Date,
                default:Date.now()

            }
        }
    ]
})

//prehooks
userSchema.pre('save',function(next){
    const user=this
    if(user.isNew)
   {
        bcryptjs.genSalt(10)
    .then(function(salt){
        bcryptjs.hash(user.password,salt)
        .then(function(encypted){
            user.password=encypted
            next()
        })
    })
}
else{
    next()
}
})

userSchema.statics.findByCredentials=function(email,password){
    const user=this
    console.log("within findbycreadentials",email)
    return user.findOne({email})
            .then(function(user){
                console.log('user1',user)
                if(!user){
                    
                    return Promise.reject('invalid')
                }
                else{
                   return bcryptjs.compare(password,user.password)
                            .then(function(result){
                               if(result){
                                  return Promise.resolve(user)
                               }
                               else{
                                  return Promise.reject('invalid password')
                               }
                            })
                }
            }) 
            .catch(function(err){
                return Promise.reject(err)
            })
}

userSchema.methods.generateToken=function(){
    const user=this
    const tokenData={
        _id:user._id,
        userName:user.userName,
        createdAt:Number(new Date())
    }
    const token=jwt.sign(tokenData,'jwt@123')
    console.log("within generate token",token)
    user.tokens.push({token})
    return user.save()
    .then(function(user){
        return Promise.resolve(token)
    })
    .catch(function(err){
        return Promise.reject(err)
    })
}

userSchema.statics.findByToken=function(token){
    const user=this
let tokenData
try{
    tokenData=jwt.verify(token,'jwt@123')
}
catch(err){
    return Promise.reject(err)
}
return user.findOne({
    _id:tokenData._id,
    'tokens.token':token
})
}




const User=mongoose.model("User",userSchema)
module.exports={User}
