
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShockwaveSectionSchema = new Schema({
    image: { type: String },
    heading: { type: String },
    p2: { type: String },
    p3: { type: String },
    p4: { type: String }
})

const ShockwaveSection = mongoose.model('shockwaveSection', ShockwaveSectionSchema)
module.exports = ShockwaveSection