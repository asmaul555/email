const App = require('express')();
App.use(bodyParser.json());

//import validator file
const emailValidator=require('./validators/validator')

const emailModel=require('./model/emailMode')
App.post('/email',(req,res)=>{
  const {email}=req.body

  //email validator send an object like {email,name,address,....} 
  // we will get return a object that assign to validator variable
  const validator=emailValidator({email})

  //check isValid:ture or false
  if(validator.isValid){//true
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
  }else{
    //false
    res.status(400).json({error:validator.error})
  }
 
})