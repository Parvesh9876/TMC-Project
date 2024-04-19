const ReciveOutModel=require("../models/recieveoutside")
const bodyparser=require("body-parser")
const express=require("express")

const router=express.Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))


router.get("/",async(req,res)=>{
    try{
        
        const data=await ReciveOutModel.find();
        
        res.render("table",{data});
        // res.send("Hello Worl")


    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.post("/byid",async(req,res)=>{
    try{
        const para=req.body.search;
        console.log(para);
        
        const data=await ReciveOutModel.find({PacketNo:para});
        // res.status(200).json({msg:"Success",data:check});
        res.render("table",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.post("/alloted",async(req,res)=>{
    try{
        
        
        const data=await ReciveOutModel.find({Alloted:"true"});
        // res.status(200).json({msg:"Success",data:check});
        res.render("table",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.post("/notalloted",async(req,res)=>{
    try{
       
        
        
        const data=await ReciveOutModel.find({Alloted:false});
        // res.status(200).json({msg:"Success",data:check});
        res.render("table",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.post("/checked",async(req,res)=>{
    try{
       
        
        
        const data=await ReciveOutModel.find({Checked:true});
        // res.status(200).json({msg:"Success",data:check});
        res.render("table",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.post("/notchecked",async(req,res)=>{
    try{
       
        
        
        const data=await ReciveOutModel.find({Alloted:false});
        // res.status(200).json({msg:"Success",data:check});
        res.render("table",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
module.exports=router;