import NOtes from "../model/NOtes.js";
export const getNotes = async (req, res , next)=>{
   try {
    const notes = await NOtes.find().sort({createdAt: -1})
    res.status(200).json({success: true, count: notes.length, data: notes})
   } catch (err) {
    next(err);
   } 
}