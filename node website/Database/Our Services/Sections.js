
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OurSectionsSchema = new Schema({
    image: { type: String },
    heading: { type: String },
    description: { type: String },
    btn: { type: String }
})

const OurSections = mongoose.model('ourSections', OurSectionsSchema)
module.exports = OurSections