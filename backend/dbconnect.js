import mongoose from 'mongoose'
const dbconnect = async ()=>{
    await mongoose.connect('mongodb+srv://sn1638:sn1638@cluster0.kejzwcf.mongodb.net')
    .then(()=>console.log("mongodb connected successfully"))
    .catch((err)=>{console.log(err.message)})
}
export default dbconnect