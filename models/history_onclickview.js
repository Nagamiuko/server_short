import mongoose from "mongoose";
const {Schema} = mongoose;
const History_click_view = new mongoose.Schema({
    view_page:{
      type:Number,
      default:0
    },
    count_click_copy:{
      type:Number,
      default:0
    },
}
)
export default mongoose.model("history_view", History_click_view)