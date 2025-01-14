import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bookRouter from "./routes/books.js"
const app = express();

app.use(cors());
app.use(express.static("./uploads"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/CrudWSSA")
.then(()=>{console.log("DB Connect")});

app.get("/",(req,res)=>{res.send("Server Start");});
app.use("/",bookRouter);

app.listen(3000,()=>{console.log("Server Start On http://localhost:3000")});