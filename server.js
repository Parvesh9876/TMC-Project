const exprees=require("express")
const app=exprees()
const port=3000;
const db=require('./database/db.js')
const path = require('path')
app.use('/static', exprees.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
   res.render("index",{root: __dirname})
})



//routes
const login=require("./routes/login.js")
const register=require("./routes/register.js")
const addpacket=require("./routes/recivefromout.js")
const check=require("./routes/check.js")
const packetAllocate=require("./routes/packetallocate.js")
const PacketRecieveFromTeacher=require("./routes/packetReciveFromTeacher.js")

app.use("/register",register)
app.use("/submit",login)
app.use("/addpacket",addpacket)
app.use("/check",check)
app.use("/packetallocate",packetAllocate)
app.use("/recievePacket",PacketRecieveFromTeacher)





app.listen(port,()=>{
    console.log("Server Is started",port);
})
