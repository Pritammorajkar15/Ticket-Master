const mongoose=require('mongoose')
const Schema =mongoose.Schema

departmentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Department=mongoose.model('Department',departmentSchema)
module.exports={Department}