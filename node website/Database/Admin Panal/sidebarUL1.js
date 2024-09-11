
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SidebarUL1Schema = new Schema({
    icon: { type: String },
    name: { type: String },
    link: { type: String }
})

const SidebarUL1 = mongoose.model('sidebarUL1', SidebarUL1Schema)
module.exports = SidebarUL1