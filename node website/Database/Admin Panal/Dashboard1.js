
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Dashboard1Schema = new Schema({
    blurPart: {
        title: { type: String },
        count: { type: String },
        Image: { type: String }
    },
    greenPart: {
        title: { type: String },
        count: { type: String },
        Image: { type: String }
    },
    orangePart: {
        title: { type: String },
        count: { type: String },
        Image: { type: String }
    }
})

const Dashboard1 = mongoose.model('dashboard1', Dashboard1Schema)
module.exports = Dashboard1