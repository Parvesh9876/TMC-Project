const PacketAllocate = require("../models/packetAllocates.js")
const recieveoutside = require("../models/recieveoutside.js")
const bodyparser = require("body-parser")
const express = require("express")
const router = express.Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))

const update_Packet = async (pac) => {
    console.log(pac);
    try {
        const update = await recieveoutside.findOneAndUpdate({ PacketNo: pac }, { Alloted: "true" }, {
            new: true,
            runValidators: true
        })
        if (update) {
            console.log("Updated");
        } else {
            console.log("Not Updated");
        }
    } catch (er) {
        console.log("Error in update_Packet:", er);
    }
}

const check = async (id) => {
    try {
        console.log("Entering check function:", id);
        const query = {
            TeacherId: id
        }
        const check = await PacketAllocate.findOne(query);
        
        if (check) {
            console.log("Check found:", check);
            return true;
        } else {
            return false;
        }
    } catch (er) {
        console.log("Error in check:", er);
        return false;
    }
}

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const pac = req.body.PacketNo;
        const checkData = data.TeacherId;
        console.log("checkData:", checkData);
        const exist = await check(checkData);
        console.log("Exist:", exist);

        if (exist) {
            console.log("Document exists. Updating...");
            const obj = {
                Packetno: data.PacketNo,
                time: data.Time,
                date: data.Date
            }
            const query = {
                TeacherId: data.TeacherId
            }
            const append = await PacketAllocate.findOneAndUpdate(query, { $push: { PacketNo: obj } });
            update_Packet(pac);
            if (append) {
                console.log("Success");
                res.status(200).json({ msg: "Success" });
            } else {
                console.log("Error");
                res.status(500).json({ msg: "Unsuccessful" });
            }
        } else {
            console.log("Document does not exist. Creating new document...");
            const newPacket = new PacketAllocate({
                PacketNo: [
                    {
                        Packetno: data.PacketNo,
                        time: data.Time,
                        date: data.Date
                    }
                ],
                TeacherId: data.TeacherId,
                NoofSheet: data.NoofSheet,
                AllotBy: data.AllotBy,
                AllotTo: data.AllotTo,
                Date: data.Date,
                Time: data.Time,
                Semester: data.Semester,
                Subject: data.Subject
            });
            const response = await newPacket.save();
            update_Packet(pac);
            res.status(200).json({ msg: "Success", data: response, PacketNo: pac });
        }
    } catch (er) {
        console.log("Error in router.post:", er);
        res.status(500).json({ msg: "Error" });
    }
});

module.exports = router;
