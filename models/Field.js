import mongoose from "mongoose";

const fieldSchema = mongoose.Schema({
    title :{type:String ,required:true} ,
    fullName:{type:String},
    description:{type:String} ,
    capacity :{type:Number ,required:true} ,
    city :{type:String ,required:true} ,
    address :{type:String ,required:true} ,
    owner : {type : mongoose.Schema.Types.ObjectId , ref :'Owner'} ,
    price : {type:Number ,required:true},
    images: { type:[String]},
    status :{type:String ,enum:['full',"Available",'Not Available']} ,
    type : {type : String , enum :['padel'  , 'football']}
},{timestamps : true})

export default mongoose.model('Field' , fieldSchema)