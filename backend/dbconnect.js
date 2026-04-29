import dotenv from 'dotenv'
const mongodb_uri=process.env.mongodb_uri;
import mongoose from 'mongoose'
const dbconnect = async ()=>{
    await mongoose.connect(mongodb_uri)
    .then(()=>console.log("mongodb connected successfully"))
    .catch((err)=>{console.log(err.message)})
}
export default dbconnect