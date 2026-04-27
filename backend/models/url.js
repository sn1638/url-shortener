import mongoose,{Schema} from "mongoose";
const urlschema= new Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirecturl:{
        type:String,
        required:true,
    },
    visithistory:[{timestamp:{type:Number}}],


},{timestamps:true})

export const URL= mongoose.model('url',urlschema)