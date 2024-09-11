
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SidebarSchema = new Schema({
    img: { type: String },
    title: { type: String },
    des: { type: String },
    icon: { type: String }
})

const Sidebar = mongoose.model('blogSidebar', SidebarSchema)
module.exports = Sidebar