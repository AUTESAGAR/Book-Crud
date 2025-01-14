import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    photo:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()},
});

const bookHandle = new mongoose.model("book",bookSchema);

export default bookHandle;