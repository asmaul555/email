const validator=require('validator')
const mongoose=require('mongoose')
const emailSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                 ('provide correct email')
            }
        }
    }
}

);
module.exports=mongoose.model('userEmail',emailSchema)