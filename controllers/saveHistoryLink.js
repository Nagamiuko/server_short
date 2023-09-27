import history_model from "../models/history_model.js";

export const saveHisLink = async (req,res) =>{
   const {full_link , short_link} = req.body
   try{
       const saveData = new history_model({
          full_link:full_link,
          short_link:short_link,
       })
       const data = await saveData.save()
       res.status(201).json({success:true , data})
   }catch(err){
      res.status(404).json({message:"No Data!"})
      console.log(err);
   }
}
export const getAllHisLink = async (req,res) =>{
   try{
       const datahistory = await history_model.find()
       res.status(201).json({success:true , datahistory})
   }catch(err){
      res.status(404).json({message:"No Data!"})
      console.log(err);
   }
}