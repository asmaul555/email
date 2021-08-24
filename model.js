const mongoose=require('mongoose')
const emailSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    }
}

);
module.exports=mongoose.model('userEmail',emailSchema)