const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
  

    PacketNo:{
        type:[
                
                    {
                        Packetno:Number,
                        time:String,
                        date:String,
                                     
                    }
                
            ],      
    },
    TeacherId:{
        type:String,
        required:true
    },
    NoofSheet:{
        type:Number,
        required:true
    },
    AllotBy:{
        type:String,
        required:true
    },
    AllotTo:{
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
    
    Semester:{
        type:String,
        required:true
    },
    Subject:{
        type:String,
        required:true
    }
    
})
const packetAllocation=mongoose.model('packetAllocation',userSchema);
module.exports=packetAllocation;