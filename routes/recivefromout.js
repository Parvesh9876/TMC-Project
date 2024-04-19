const ReciveOutModel=require("../models/recieveoutside")
const bodyparser=require("body-parser")
const express=require("express")
const router=express.Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))
router.post("/",async(req,res)=>{
    try{
        const data=req.body;
        const newPacket=new ReciveOutModel(data);
        const response=await newPacket.save();
        res.status(200).json({msg:"Success",data:response});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
module.exports=router;