
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EleSec2Schema = new Schema({
    image: { type: String },
    title: { type: String },
    details: { type: String },
    description: { type: String }
})

const EleSec2 = mongoose.model('eleSec2', EleSec2Schema)
module.exports = EleSec2