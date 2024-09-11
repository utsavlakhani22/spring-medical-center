
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OurTeamApiSchema = new Schema({
    image: { type: String },
    heading: { type: String },
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
    p4: { type: String },
    lm: { type: String }
})

const OurTeamApi = mongoose.model('OurTeamApi', OurTeamApiSchema)
module.exports = OurTeamApi