const {Employee}=require('../models/employee')
//const {user}=require('../models/user')
module.exports.list=(req,res)=>
{
    Employee.find({user:req.user._id}).populate('department',['name'])
    .then((employees)=>
    {
        res.json(employees)
    })
    .catch((err)=>
    {
        res.json(err)
    })
}
module.exports.create=(req,res)=>
{  const body=req.body
    const employee=new Employee(body)
    employee.user=req.user._id
    employee.save()
    .then((employee)=>
    {
        
            res.json(employee)
       
    })
    .catch((err)=>
    {
        res.json(err)
    })
}
module.exports.show=(req,res)=>
{
    const id =req.params.id
    Employee.findOne({user:req.user._id,_id:id}).populate('department',['name'])
    .then((employee)=>{
        if(employee)
        {
            res.json(employee)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
    
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.params.body
    Employee.findOneAndUpdate({user:req.user._id,_id:id},body,{new:true,runValidators:true}).populate('department',['name'])
    .then((employee)=>
    {
        if(employee)
        {
            res.json(employee)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.destroy=(req,res)=>
{const id=req.params.id
    Employee.findOneAndDelete({user:req.user._id,_id:id}).populate('department',['name'])
    .then((employee)=>{
        if(employee)
        {
            res.json(employee)
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