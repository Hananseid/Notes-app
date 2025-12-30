import mongoose from "mongoose";

export const connectDb = async ()=>{
try {
   console.log("mongoose connectedd succesfully ") 
   const good = await mongoose.connect(process.env.MONGO_URT)
   console.log("MongoDB connected:", good.connection.host);
} catch (err) {
    console.log("Erroro  connecting to MongoDB: ", err)
    process.exit(1);
}
}