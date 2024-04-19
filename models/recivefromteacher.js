const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    PacketNo:{
        type:Number ,
        required:true,
        
    },
    TeacherId:{
        type:Number,
        required:true
    },
    NoofSheet:{
        type:Number,
        required:true
    },
    RecieveBy:{
        type:String,
        required:true
    },
    RecieveFrom:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },   
   
})
const recievePacket=mongoose.model('recievePacket',userSchema);
module.exports=recievePacket;