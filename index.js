import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import { connectDb } from "./config/db.js";


dotenv.config()

const app = express()
const PORT = process.env.PORT

connectDb();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to Notes App ")
})
app.listen(PORT, ()=>{
    console.log(`Notes App is running on port ${PORT}`);
})