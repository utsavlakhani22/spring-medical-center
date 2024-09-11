

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const navbar1Schema = new Schema({
    icon: { type: String },
    i_title: { type: String },
    description: { type: String },
})

const Navbar1 = mongoose.model('navbar1', navbar1Schema)
module.exports = Navbar1