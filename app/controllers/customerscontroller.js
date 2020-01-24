const Customer=require('../models/customer')
//const {user}=require('../models/user')
module.exports.list=(req,res)=>{
  //  console.log("customers",req)
    Customer.find({user:req.user._id})
    .then((customers)=>
    {console.log("customers list",customers,req.user)
        res.json(customers)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.show=(req,res)=>
{
    const id=req.params.id
Customer.findOne({user:req.user._id,_id:id})
    .then((customer)=>{
        if(customer){
            res.json(customer)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>
    {
        res.json(err)
    })
}
module.exports.create=(req,res)=>
{
    const body=req.body

    const customer=new Customer(body)
    customer.user=req.user.id
    customer.save()
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>
    {
        res.json(err)
    })
}
module.exports.update=(req,res)=>
{
    const id=req.params.id
    const body=req.body
    Customer.findOneAndUpdate({user:req.user._id,_id:id},body,{new:true,runValidators:true})
    .then((customer)=>{
        if(customer){
            res.json(customer)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>
    {
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>
{
    const id=req.params.id
    Customer.findOneAndDelete({user:req.user._id,_id:id})
    .then((customer)=>{
        if(customer){
            res.json(customer)
        }
        else{
            res.json({})
        }
        
    })
    .catch((err)=>
    {
        res.json(err)
    })
}