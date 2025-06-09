import mongoose from 'mongoose'



const timeSchema = new mongoose.Schema({
    fields:{type : mongoose.Schema.Types.ObjectId , ref :'Field'},
    time : [],
    day : Date
},
{timestamps:true})


export default mongoose.model('Time' , timeSchema)