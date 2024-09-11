

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sec2Schema = new Schema({
    first: {
        image: { type: String },
        title: { type: String },
        description: { type: String }
    },
    secund: {
        image: { type: String },
        title: { type: String },
        description: { type: String }
    }
})

const whySec2 = mongoose.model('whySpringSec2', sec2Schema)
module.exports = whySec2