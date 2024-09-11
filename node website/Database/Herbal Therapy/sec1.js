
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TraditionalSec1Schema = new Schema({
    image: { type: String },
    title: { type: String },
    details: { type: String },
    description: { type: String }
})

const traditionalSec1 = mongoose.model('traditionalSec1', TraditionalSec1Schema)
module.exports = traditionalSec1