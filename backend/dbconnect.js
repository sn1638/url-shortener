import dotenv from 'dotenv'
const MONGO_URI=process.env.MONGO_URI;
import mongoose from 'mongoose'
const dbconnect = async ()=>{
    await mongoose.connect(MONGO_URI)
    .then(()=>console.log("mongodb connected successfully"))
    .catch((err)=>{console.log(err.message)})
}
export default dbconnect