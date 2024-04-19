const mongose=require("mongoose");
const mongoURL='mongodb://localhost:27017/tmc';

mongose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

const db=mongose.connection;
db.on('connected',()=>{
    console.log("Connected");
})
db.on('error',(err)=>{
    console.log("Eroor=",err);
})
db.on('disconnected',()=>{
    console.log("Disconnected");
})
module.exports=db;