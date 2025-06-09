import mongoose from "mongoose";

const requestSchema=mongoose.Schema(    {
    owner : {type : mongoose.Schema.Types.ObjectId , ref :'Owner'},
    user:{type: mongoose.Schema.Types.ObjectId, ref:"Users"},
    address:{type:String},
    fullName:{type:String},
    title:{type:String},
    phoneNumber:{type:Number},
    day: { type: Date, required: true },
    time: { type: String, required: true }, // Use String for times like "7:30", "9:00", etc.
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
    status :{type:String ,enum:['Canceled ',"Accepted","Pending"],default:'Pending'} ,
    type : {type : String ,required: true  }
},
{timestamps:true})
export default mongoose.model('Request',requestSchema)