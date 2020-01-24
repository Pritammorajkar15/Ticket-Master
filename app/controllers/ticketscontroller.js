const {Ticket}=require('../models/ticket')
const {user}=require('../models/user')
module.exports.list=(req,res)=>{
    Ticket.find({user:req.user._id})
    .populate('customer',['name'])
    .populate('department',['name'])
    .populate('employee',['name'])
    .then((tickets)=>
    { console.log("ticket list",tickets)

        res.json(tickets)
    })
    .catch((err)=>
    {
        res.json(err)
    })
}

module.exports.create=(req,res)=>{

    const body=req.body
    const ticket=new Ticket(body)
    ticket.user=req.user._id
    ticket.save()
    .then((ticket)=>{
        console.log("tickets after save",ticket)
        res.json(ticket)
    })
    .catch((err)=>
    {
        res.json(err)
    })
}
module.exports.show=(req,res)=>
{
    const id=req.params.id
    Ticket.findOne({user:req.user._id,_id:id})
    .populate('customer',['name'])
    .populate('department',['name'])
    .populate('employee',['name'])
    .then((ticket)=>{
        if(ticket)
        {
            res.json(ticket)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.update=(req,res)=>
{
    const body=req.body
    const id=req.params.id
    Ticket.findOneAndUpdate({user:req.user._id,_id:id},body,{new:true,runValidators:true})
    .populate('customer',['name'])
    .populate('department',['name'])
    .populate('employee',['name'])
    .then((ticket)=>{
        if(ticket){
            res.json(ticket)
        }else{
            res.json({})
        }
    })
    .catch((err)=>
    {
        res.json(err)
    })
}
module.exports.destroy=(req,res)=>{
const id=req.params.id
Ticket.findOneAndDelete({user:req.user._id,_id:id})

.then((ticket)=>
{
    if(ticket){
        res.json(ticket)
    }
    else{
        res.json({})
    }
})
.catch((err)=>{
    res.json(err)
})
}