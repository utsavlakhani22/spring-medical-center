


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec5Schema = new Schema({
    image: { type: String },
    title: { type: String }
})

const whySec5 = mongoose.model('whySpringSec5', sec5Schema)
module.exports = whySec5