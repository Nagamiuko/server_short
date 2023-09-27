import history_oncilck from "../models/history_onclickview.js";

export const saveViewHistory = async (req,res) =>{
   const {view_page ,count_click_copy , count_click_qr} = req.body
   try{
       const saveData = new history_oncilck({
          view_page:view_page,
          count_click_copy:count_click_copy,
          count_click_qr:count_click_qr
       })
       const data = await saveData.save()
       res.status(201).json({success:true , data})
   }catch(err){
      res.status(404).json({message:"No Data!"})
      console.log(err);
   }
}
export const getAllViewHistory = async (req,res) =>{
   try{
       const viewhistory = await history_oncilck.find()
       res.status(201).json({success:true , viewhistory})
   }catch(err){
      res.status(404).json({message:"No Data!"})
      console.log(err);
   }
}