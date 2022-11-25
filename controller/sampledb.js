const samplemod = require('../models/sampledb.js')
const mongoose = require('mongoose')

module.exports.roleInsert = async (req, res) => {
    try {
        const data = await samplemod.create({
            role_name: req.body.role_name
        })
        await data.save()
        res.send('role inserted')
    } catch (err) {
        console.log(err)
    }
}

module.exports.getRoles = async (req, res) => {
    try {
        const data = await samplemod.find();
        res.send(data);
    } catch (err) {
        console.log(err)
    }
}

module.exports.deleteRole = async (req, res) => {
    try {
        await samplemod.remove({ _id: req.params.id })
        res.send('role deleted');
    } catch (err) {
        console.log(err)
    }
}

module.exports.updateRole = async (req, res) => {
    try {
        if (!req.body.role_name || !req.body.role_id) {
            return res.status(400).json({ message: "error nothing to update " })
        }
        else {
            let r = await samplemod.updateOne({ _id: req.params.id }, { $set: (req.body) })
            return res.status(202).json({
                "message": "role modified successfully",
                
            })

        }

    } catch (err) {
        console.log(err)
    }
}

module.exports.getOneRole = async (req, res) => {
    try {
        const data = await samplemod.findById(req.params.id);
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}

// module.exports = {
//     roleInsert , 
//     getRoles ,
//     deleteRole , 
//     updateRole ,
//     getOneRole ,
// }
