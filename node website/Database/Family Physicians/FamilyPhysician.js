
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FamilyPhysicianSchema = new Schema({
    image: { type: String },
    heading: { type: String },
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
    p4: { type: String },
    lm: { type: String }
})

const FamilyPhysician = mongoose.model('FamilyPhysician', FamilyPhysicianSchema)
module.exports = FamilyPhysician