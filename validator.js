const validator=require('validator')
const error={
    //email='plz provide your valid email'

}
module.exports=emailValidator=(user)=>{
    //user is an object
    if(!validator.isEmail(user.email)){
        error.email='plz provide your valid email'
    }
    // if(!user.name){
    //     error.name='plz provide your name'
    // }
    // if(!user.address){
    //     error.address='plz provide your address'
    // }

    return{
        
        //return errors
        error,

        //if error length is 0 return true otherwise false
        //get isValid:true || false
        isValid:Object.keys(error).length===0
    }
}

// email and anythin validator
