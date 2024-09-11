


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec2Schema = new Schema({
    first: {
        Image: { type: String },
        title: { type: String },
        description: { type: String },
        button: { type: String }
    },
})

const Sec2 = mongoose.model('sec2', sec2Schema)
module.exports = Sec2