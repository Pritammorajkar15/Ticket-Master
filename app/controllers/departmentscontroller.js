const {Department}=require('../models/department')
//const{ user}=require('../models/user')
module.exports.list=(req,res)=>
{
    Department.find({user:req.user._id})
    .then((departments)=>
    {
        res.json(departments)
    })
    .catch((err)=>
    {
        res.json(err)
    })
}

module.exports.create=(req,res)=>
{
    const body=req.body
    const department=new Department(body)
    department.user=req.user._id
    department.save()
    .then((department)=>
    {
        res.json(department)
    })
    .catch((err)=>
    {
        res.json(department)
    })
}

module.exports.show=(req,res)=>
{
    const id=this.params.id
    Department.findOne({user:req.user._id,_id:id})
    .then((department)=>
    {
        if(department)
        {
            res.json(department)
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

module.exports.update=(req,res)=>
{
    const id=req.params.id
    const body=req.body
    Department.findOneAndUpdate({user:req.user._id,_id:id},body,{new:true,runValidators:true})
    .then((department)=>
    {
        if(department)
        {
            res.json(department)
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
    Department.findOnendDelete({user:req.user._id,_id:id})
    .then((department)=>
    {
        if(department)
        {
            res.json(department)
        }
        else{res.json({})}
    })
    .catch((err)=>
    {
        res.json(err)
    })
}