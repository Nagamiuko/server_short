import mongoose from "mongoose";
const {Schema} = mongoose;

const History_Link = new mongoose.Schema({
    original_link:{
      type:String,
      default:0
    },
    short_link:{
      type:String,
      default:0
    },
},{timestamps:true}
)
export default mongoose.model("History", History_Link)