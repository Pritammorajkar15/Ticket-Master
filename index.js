const express=require('express')
const app=express()
const port=3025
const configureDB=require('./config/database')
const cors=require('cors')
const router=require('./config/routes')
app.use(express.json())
configureDB()
app.use(cors())
app.get('/',(req,res)=>{
    res.send('welcome to the ticket master app')
})

app.use('/',router)


app.listen(port,()=>{
    console.log('listning on port',port)
})