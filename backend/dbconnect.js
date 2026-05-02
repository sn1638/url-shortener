import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose'
const dbconnect = async ()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("mongodb connected successfully"))
    .catch((err)=>{console.log(err.message)})
}
export default dbconnect