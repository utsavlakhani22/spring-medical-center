
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShockwaveTableSchema = new Schema({
    li1: { type: String },
    li2: { type: String },
    li3: { type: String },
    li4: { type: String },
})

const ShockwaveTable = mongoose.model('shockwaveTable', ShockwaveTableSchema)
module.exports = ShockwaveTable