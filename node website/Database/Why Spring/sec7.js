


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec7Schema = new Schema({
    image: { type: String },
    title: { type: String },
    details: { type: String },
    class1: { type: String }
})

const whySec7 = mongoose.model('whySpringSec7', sec7Schema)
module.exports = whySec7