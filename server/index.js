const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { userList } = require("./data/users");
const connectDB = require("./config/db");
require("dotenv").config();


connectDB();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Mongoose DB connected successfully");
}).catch((err) => {
    console.log("Error",err.message)
})

app.get("/",(req,res) => {
    res.send("GET API running")
})

app.get("/api/users",(req,res) => {
    res.send(userList)
})

const server = app.listen(process.env.PORT,() => {
    console.log(`Server Connected on port ${process.env.PORT}`)
})