

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec6Schema = new Schema({
    icon: { type: String },
    title: { type: String },
    description: { type: String },
    button: { type: String },
    img: { type: String }
})

const Sec6 = mongoose.model('sec6', sec6Schema)
module.exports = Sec6