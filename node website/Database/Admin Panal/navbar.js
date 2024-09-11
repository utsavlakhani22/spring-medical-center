
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NavbarSchema = new Schema({
    img: { type: String },
    style: { type: String },
    title: { type: String },
    menu: {
      first: { type: String },
      secound: { type: String },
      third: { type: String }
    }
})

const Navbar = mongoose.model('AdminNavbar', NavbarSchema)
module.exports = Navbar