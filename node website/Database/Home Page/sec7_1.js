

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec7_1Schema = new Schema({
    title: { type: String },
    icon: { type: String }
})

const Sec7_1 = mongoose.model('sec7_1', sec7_1Schema)
module.exports = Sec7_1