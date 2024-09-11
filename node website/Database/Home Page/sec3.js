


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec3Schema = new Schema({
    iamges: { type: String },
    name: { type: String }
})

const Sec3 = mongoose.model('sec3', sec3Schema)
module.exports = Sec3