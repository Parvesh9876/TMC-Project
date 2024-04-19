const mongose=require("mongoose")
const reicievefromoutside=mongose.Schema({
    PacketNo:{
        type:Number,
        required:true,
        unique:true
    },
    NoofSheet:{
        type:Number,
        required:true
    },
    Source:{
        type:String,
        required:true
    },
    Destination:{
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
    type:{
        type:String,
        required:true
    },
    Shift:{
        type:String,
        required:true,

    },
    Semester:{
        type:String,
        required:true
    },
    Subject:{
        type:String,
        required:true
    },
    Alloted:{
        type :String,
        required:true,
        default:false
    },
    Checked:{
        type:Boolean,
        default:false
    }
})
const reicievefromoutsidemodel=mongose.model("recievefromoutside",reicievefromoutside)
module.exports=reicievefromoutsidemodel;