

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec7_2Schema = new Schema({
    img: { type: String },
    title: { type: String },
    button: { type: String }
})

const Sec7_2 = mongoose.model('sec7_2', sec7_2Schema)
module.exports = Sec7_2