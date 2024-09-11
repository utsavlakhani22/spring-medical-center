
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MainSchema = new Schema({
    image: { type: String },
    details: {
        nameIcon: { type: String }, name: { type: String },
        dateIcon: { type: String }, date: { type: String },
        timeIcon: { type: String }, time: { type: String },
        commentIcon: { type: String }, comment: { type: String }
    },
    title: { type: String },
    des: { type: String },
    read: { type: String }
})

const Main = mongoose.model('blogMain', MainSchema)
module.exports = Main