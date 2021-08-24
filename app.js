const App = require('express')();
App.use(bodyParser.json());
const emailModel=require('./model/emailMode')
App.post('/email',(req,res)=>{
  const {email}=req.body
 const saveEmail=new emailModel({
    email
  })
  saveEmail.save()
  .then(user=>{
    res.status(201).json({message:'ok',user})

  })
  .catch(err=>{
    res.status(500).json({message:'serverError',err})

  })
})