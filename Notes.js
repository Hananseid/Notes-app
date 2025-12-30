import mongoose, { mongo } from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "title is required"],
        trim: true,
        maxLength: [70, "title canot exceed 70 characters."]
    
    },
},{
    timestamps: true,
})

export default mongoose.model("Note", noteSchema);