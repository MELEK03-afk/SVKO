import mongoose from "mongoose";

const ownerSchema=mongoose.Schema(    {
    fullName:{type:String ,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phoneNumber:{type:Number},
    role:{type:String , required :true},
    profilAvatar : String,
    address : String,
    city : String ,
},
{timestamps:true})
export default mongoose.model('Owner',ownerSchema)