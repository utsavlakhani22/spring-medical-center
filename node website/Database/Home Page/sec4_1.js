


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec4_1Schema = new Schema({
    title: { type: String },
    description: { type: String },
    details: {
        img: { type: String },
        title: { type: String },
        button: { type: String }
    }
})

const Sec4_1 = mongoose.model('sec4_1', sec4_1Schema)
module.exports = Sec4_1