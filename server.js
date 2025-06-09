import express from 'express'
import colors from 'colors'
import cors from "cors"
import connectToMongoose from './config/DBconfig.js'
import commonRouter from './router/commonRouter.js'
import ownerRouter from './router/ownerRoutes.js'
import AdminRouter from './router/adminRouter.js'
import multer from 'multer'
const port=process.env.PORT

const app=express()
app.use(express.json())
connectToMongoose()
app.use(cors())
app.use('/uploads', express.static('uploads'));
app.use('/api',commonRouter)
app.use('/api/Owner',ownerRouter)
app.use('/api/Admin',AdminRouter)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`.blue.underline)
})