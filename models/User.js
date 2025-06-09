import mongoose from "mongoose";

const userSchema=mongoose.Schema(    {
    fullName:{type:String ,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phoneNumber:{type:Number},
    role:{type:String,enum:["User","Admin","Owner"],default:"User"},
    profilAvatar : String,
    address : String,
    city : String ,
},
{timestamps:true})
export default mongoose.model('User',userSchema)