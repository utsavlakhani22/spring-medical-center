
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OurSec6Schema = new Schema({
    image: { type: String },
    title: { type: String }
})

const OurSec6 = mongoose.model('ourSec6', OurSec6Schema)
module.exports = OurSec6