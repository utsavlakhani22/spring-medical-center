
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FootOrthoticsSchema = new Schema({
    image: { type: String },
    heading: { type: String },
    p1: { type: String },
    p2: { type: String },
    p3: { type: String }
})

const FootOrthotics = mongoose.model('footOrthotics', FootOrthoticsSchema)
module.exports = FootOrthotics