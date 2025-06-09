import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
    owner : {type : mongoose.Schema.Types.ObjectId , ref :'Owner'},
    user:{type: mongoose.Schema.Types.ObjectId, ref:"Users"},
    fullName:{type:String},
    title:{type:String},
    phoneNumber:{type:Number},
    capacity:{type:Number},
    day: { type: Date, required: true },
    time: { type: String, required: true },
    price: { type: Number, required: true },
    type : {type : String , required: true }

},{timestamps:true})

export default mongoose.model('Reservation',reservationSchema)