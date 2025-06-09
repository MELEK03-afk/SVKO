import mongoose from "mongoose";

const URL=process.env.MONGO_URL

const connectToMongoose = async()=>{
    try {
        await mongoose.connect(URL)
        console.log("Connect".white.underline)
    } catch (error) {
        console.log(error)
    }
}
export default connectToMongoose