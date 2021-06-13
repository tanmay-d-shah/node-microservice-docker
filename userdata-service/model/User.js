const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})
var UserModel=mongoose.model('User',UserSchema);
module.exports=UserModel;