
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HolterSec1Schema = new Schema({
    image: { type: String },
    title: { type: String },
    details: { type: String },
    description: { type: String }
})

const holterSec1 = mongoose.model('holterSec1', HolterSec1Schema)
module.exports = holterSec1