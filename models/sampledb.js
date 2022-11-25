const mongoose = require('mongoose')

const smapledbSchema = new mongoose.Schema({
    role_id: {
        type:Number,
    },
    role_name: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('sampledb', smapledbSchema)