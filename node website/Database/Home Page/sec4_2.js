

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec4_2Schema = new Schema({
    img: { type: String },
    title: { type: String },
    button: { type: String }
})

const Sec4_2 = mongoose.model('sec4_2', sec4_2Schema)
module.exports = Sec4_2