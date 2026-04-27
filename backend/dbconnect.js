import mongoose from 'mongoose'
const dbconnect = async ()=>{
    await mongoose.connect(Mongodb_uri)
    .then(()=>console.log("mongodb connected successfully"))
    .catch((err)=>{console.log(err.message)})
}
export default dbconnect