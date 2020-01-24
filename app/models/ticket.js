const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ticketScehma=new Schema({
    customer:{
type:Schema.Types.ObjectId,
ref:'Customer'
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department',
        required:true
    },
    employee:[{
        type:Schema.Types.ObjectId,
        ref:'Employee',
        required:true
    }],
    code:{
        type:String,

    required:true
    
},

    message:{
        type:String,
        maxlength:10,
    required:true
},

    priority:{
        type:String,
        enum:['high','medium','low'],
        required:true

    },

    createdAt:{
        type:Date,
    default:Date.now(),
   
},
isResolved:{
    type:Boolean,
    default:false,
    required:true
},
user:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
}

})
const Ticket=mongoose.model('Ticket',ticketScehma)
module.exports={Ticket}
