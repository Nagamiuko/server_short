import mongoose from "mongoose";
const {Schema} = mongoose;

const History_Link = new mongoose.Schema({
    full_link:{
      type:String,
      default:""
    },
    short_link:{
      type:String,
      default:""
    },
},{timestamps:true}
)
export default mongoose.model("History", History_Link)