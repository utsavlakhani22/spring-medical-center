

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

require('dotenv').config()
const port = process.env.PORT || 8080
app.use(express.json())
app.use(cors())

const Navbar1 = require('./Database/Home Page/navbar1')
const Sec2 = require('./Database/Home Page/sec2')
const Sec3 = require('./Database/Home Page/sec3')
const Sec4_1 = require('./Database/Home Page/sec4_1')
const Sec4_2 = require('./Database/Home Page/sec4_2')
const Sec6 = require('./Database/Home Page/sec6')
const Sec7_1 = require('./Database/Home Page/sec7_1')
const Sec7_2 = require('./Database/Home Page/sec7_2')

const whySec2 = require('./Database/Why Spring/sec2')
const whySec5 = require('./Database/Why Spring/sec5')
const whySec7 = require('./Database/Why Spring/sec7')

const FamilyPhysician = require('./Database/Family Physicians/FamilyPhysician')

const FootOrthotics = require('./Database/Foot Orthotics/FootOrthotics')

const OurSections = require('./Database/Our Services/Sections')
const OurSec6 = require('./Database/Our Services/Sec6')
const ShockwaveSection = require('./Database/Shockwave/Section')
const ShockwaveTable = require('./Database/Shockwave/Table')
const holterSec1 = require('./Database/Holter Monitering/holterSec1')
const EleSec2 = require('./Database/Electrocardiogram/sec2')
const traditionalSec1 = require('./Database/Herbal Therapy/sec1')
const OurTeamApi = require('./Database/Our Team/ourTeamapi')
const Sidebar = require('./Database/Blog Post/sidebar')
const FirstMain = require('./Database/Blog Post/firstMain')
const Main = require('./Database/Blog Post/main')
const Dashboard1 = require('./Database/Admin Panal/Dashboard1')
const SidebarUL1 = require('./Database/Admin Panal/sidebarUL1')
const Navbar = require('./Database/Admin Panal/navbar')

app.use('/public', express.static('public'));
mongoose.connect(
    "mongodb://Localhost/project-website",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
    console.log('Connected to MongoDB')
})

// Home Page

app.post('/navbar1', async (req, res) => {
    try {
        const { icon, i_title, description } = req.body
        const navbar1 = new Navbar1({
            icon,
            i_title,
            description
        })
        const savedNavbar1 = await navbar1.save()
        res.status(201).json({
            code: 201,
            message: 'Navbar1 created successfully',
            data: savedNavbar1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/navbar1', async (req, res) => {
    try {
        const navbar1 = await Navbar1.find()
        res.status(200).json({
            code: 200,
            message: 'Navbar1 fetched successfully',
            data: navbar1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/sec2', async (req, res) => {
    try {
        const { first } = req.body
        const sec2 = new Sec2({
            first
        })
        const savedSec2 = await sec2.save()
        res.status(201).json({
            code: 201,
            message: 'Sec2 created successfully',
            data: savedSec2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/sec2', async (req, res) => {
    try {
        const sec2 = await Sec2.find()
        sec2?.map((data, index) => {
            data.first.Image = `${process.env.BASE_URL}${data.first.Image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sec2 fetched successfully',
            data: sec2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/sec3', async (req, res) => {
    try {
        const { iamges, name } = req.body
        const sec3 = new Sec3({
            iamges,
            name
        })
        const savedSec3 = await sec3.save()
        res.status(201).json({
            code: 201,
            message: 'Sec3 created successfully',
            data: savedSec3
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/sec3', async (req, res) => {
    try {
        const sec3 = await Sec3.find()
        sec3?.map((data, index) => {
            data.iamges = `${process.env.BASE_URL}${data.iamges}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sec3 fetched successfully',
            data: sec3
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/sec41', async (req, res) => {
    try {
        const { title, description, details } = req.body
        const sec4_1 = new Sec4_1({
            title,
            description,
            details
        })
        const savedSec4_1 = await sec4_1.save()
        res.status(201).json({
            code: 201,
            message: 'Sec4_1 created successfully',
            data: savedSec4_1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/sec41', async (req, res) => {
    try {
        const sec4_1 = await Sec4_1.find()
        sec4_1?.map((data, index) => {
            data.details.img = `${process.env.BASE_URL}${data.details.img}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sec4_1 fetched successfully',
            data: sec4_1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/sec42', async (req, res) => {
    try {
        const { img, title, button } = req.body
        const sec4_2 = new Sec4_2({
            img,
            title,
            button
        })
        const savedSec4_2 = await sec4_2.save()
        res.status(201).json({
            code: 201,
            message: 'Sec4_2 created successfully',
            data: savedSec4_2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/sec42', async (req, res) => {
    try {
        const sec4_2 = await Sec4_2.find()
        sec4_2?.map((data, index) => {
            data.img = `${process.env.BASE_URL}${data.img}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sec4_2 fetched successfully',
            data: sec4_2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/sec6', async (req, res) => {
    try {
        const { icon, title, description, button, img } = req.body
        const sec6 = new Sec6({
            icon,
            title,
            description,
            button,
            img
        })
        const savedSec6 = await sec6.save()
        res.status(201).json({
            code: 201,
            message: 'Sec6 created successfully',
            data: savedSec6
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/sec6', async (req, res) => {
    try {
        const sec6 = await Sec6.find()
        sec6?.map((data, index) => {
            data.icon = `${process.env.BASE_URL}${data.icon}`
            data.img = `${process.env.BASE_URL}${data.img}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sec6 fetched successfully',
            data: sec6
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/sec71', async (req, res) => {
    try {
        const { title, icon } = req.body
        const sec7_1 = new Sec7_1({
            title,
            icon
        })
        const savedSec7_1 = await sec7_1.save()
        res.status(201).json({
            code: 201,
            message: 'Sec7_1 created successfully',
            data: savedSec7_1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/sec71', async (req, res) => {
    try {
        const sec7_1 = await Sec7_1.find()
        res.status(200).json({
            code: 200,
            message: 'Sec7_1 fetched successfully',
            data: sec7_1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/sec72', async (req, res) => {
    try {
        const { img, title, button } = req.body

        const sec7_2 = new Sec7_2({
            img,
            title,
            button
        })
        const savedSec7_2 = await sec7_2.save()
        res.status(201).json({
            code: 201,
            message: 'Sec7_2 created successfully',
            data: savedSec7_2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/sec72', async (req, res) => {
    try {
        const sec7_2 = await Sec7_2.find()
        sec7_2?.map((data, index) => {
            data.img = `${process.env.BASE_URL}${data.img}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sec7_2 fetched successfully',
            data: sec7_2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

// =========== Why Spring =============

app.post('/whyspring/sec2', async (req, res) => {
    try {
        const { first, secund } = req.body
        const sec2 = new whySec2({
            first,
            secund
        })
        const savedSec2 = await sec2.save()
        res.status(201).json({
            code: 201,
            message: 'Sec2 created successfully',
            data: savedSec2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/whyspring/sec2', async (req, res) => {
    try {
        const sec2 = await whySec2.find()
        sec2?.map((data, index) => {
            data.first.image = `${process.env.BASE_URL}${data.first.image}`
            data.secund.image = `${process.env.BASE_URL}${data.secund.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sec2 fetched successfully',
            data: sec2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/whyspring/sec5', async (req, res) => {
    try {
        const { image, title } = req.body
        const sec5 = new whySec5({
            image,
            title
        })
        const savedSec5 = await sec5.save()
        res.status(201).json({
            code: 201,
            message: 'Sec5 created successfully',
            data: savedSec5
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/whyspring/sec5', async (req, res) => {
    try {
        const sec5 = await whySec5.find()
        sec5?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sec5 fetched successfully',
            data: sec5
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/whyspring/sec7', async (req, res) => {
    try {
        const { image, title, details, class1 } = req.body
        const sec7 = new whySec7({
            image,
            title,
            details,
            class1
        })
        const savedSec7 = await sec7.save()
        res.status(201).json({
            code: 201,
            message: 'Sec7 created successfully',
            data: savedSec7
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/whyspring/sec7', async (req, res) => {
    try {
        const sec7 = await whySec7.find()
        sec7?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sec7 fetched successfully',
            data: sec7
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// =========== Family Physicians =============

app.post('/familyphysician', async (req, res) => {
    try {
        const { image, heading, p1, p2, p3, p4, lm } = req.body
        const familyPhysician = new FamilyPhysician({
            image,
            heading,
            p1,
            p2,
            p3,
            p4,
            lm
        })
        const savedFamilyPhysician = await familyPhysician.save()
        res.status(201).json({
            code: 201,
            message: 'FamilyPhysician created successfully',
            data: savedFamilyPhysician
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/familyphysician', async (req, res) => {
    try {
        const familyPhysician = await FamilyPhysician.find()
        familyPhysician?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'FamilyPhysician fetched successfully',
            data: familyPhysician
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// ============ FootOrthotics =============

app.post('/footorthotics', async (req, res) => {
    try {
        const { image, heading, p1, p2, p3 } = req.body
        const footOrthotics = new FootOrthotics({
            image,
            heading,
            p1,
            p2,
            p3
        })
        const savedFootOrthotics = await footOrthotics.save()
        res.status(201).json({
            code: 201,
            message: 'FootOrthotics created successfully',
            data: savedFootOrthotics
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})
app.get('/getdata/footorthotics', async (req, res) => {
    try {
        const footOrthotics = await FootOrthotics.find()
        footOrthotics?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'FootOrthotics fetched successfully',
            data: footOrthotics
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// ============ Our Services =============

app.post('/ourservices/sections', async (req, res) => {
    try {
        const { image, heading, description, btn } = req.body
        const newSections = new OurSections({
            image,
            heading,
            description,
            btn
        })
        const savedSections = await newSections.save()
        res.status(201).json({
            code: 201,
            message: 'Our Sections created successfully',
            data: savedSections
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/ourservices/sections', async (req, res) => {
    try {
        const sections = await OurSections.find()
        sections?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Our Sections fetched successfully',
            data: sections
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/ourservices/sec6', async (req, res) => {
    try {
        const { image, title } = req.body
        const newSec6 = new OurSec6({
            image,
            title
        })
        const savedSec6 = await newSec6.save()
        res.status(201).json({
            code: 201,
            message: 'Our services created successfully',
            data: savedSec6
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/ourservices/sec6', async (req, res) => {
    try {
        const sec6 = await OurSec6.find()
        sec6?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Our Sec6 fetched successfully',
            data: sec6
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// =========== Shockwave =============

app.post('/shockwave/section', async (req, res) => {
    try {
        const { image, heading, p2, p3, p4 } = req.body
        const newSection = new ShockwaveSection({
            image,
            heading,
            p2,
            p3,
            p4
        })
        const savedSection = await newSection.save()
        res.status(201).json({
            code: 201,
            message: 'Shockwave created successfully',
            data: savedSection
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/shockwave/section', async (req, res) => {
    try {
        const section = await ShockwaveSection.find()
        section?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Shockwave Section fetched successfully',
            data: section
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/shockwave/table', async (req, res) => {
    try {
        const { li1, li2, li3, li4 } = req.body
        const newTable = new ShockwaveTable({
            li1,
            li2,
            li3,
            li4
        })
        const savedTable = await newTable.save()
        res.status(201).json({
            code: 201,
            message: 'Shockwave Table created successfully',
            data: savedTable
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/shockwave/table', async (req, res) => {
    try {
        const table = await ShockwaveTable.find()
        res.status(200).json({
            code: 200,
            message: 'Shockwave Table fetched successfully',
            data: table
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// ============ Holter Monitering =============

app.post('/holter/sec1', async (req, res) => {
    try {
        const { image, title, details, description } = req.body
        const newSec1 = new holterSec1({
            image,
            title,
            details,
            description
        })
        const savedSec1 = await newSec1.save()
        res.status(201).json({
            code: 201,
            message: 'Holter created successfully',
            data: savedSec1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/holter/sec1', async (req, res) => {
    try {
        const sec1 = await holterSec1.find()
        sec1?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Holter Sec1 fetched successfully',
            data: sec1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// ============= Electrocardiogram =============

app.post('/electrocardiogram/sec2', async (req, res) => {
    try {
        const { image, title, details, description } = req.body
        const newSec2 = new EleSec2({
            image,
            title,
            details,
            description
        })
        const savedSec2 = await newSec2.save()
        res.status(201).json({
            code: 201,
            message: 'Electrocardiogram created successfully',
            data: savedSec2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/electrocardiogram/sec2', async (req, res) => {
    try {
        const sec2 = await EleSec2.find()
        sec2?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Electrocardiogram Sec2 fetched successfully',
            data: sec2
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// ============ Herbal Therapy =============

app.post('/herbal-therapy/sec1', async (req, res) => {
    try {
        const { image, title, details, description } = req.body
        const newSec1 = new traditionalSec1({
            image,
            title,
            details,
            description
        })
        const savedSec1 = await newSec1.save()
        res.status(201).json({
            code: 201,
            message: 'Herbal Therapy created successfully',
            data: savedSec1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/herbal-therapy/sec1', async (req, res) => {
    try {
        const sec1 = await traditionalSec1.find()
        sec1?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Herbal Therapy Sec1 fetched successfully',
            data: sec1
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// =========== Our Team =============

app.post('/our-team', async (req, res) => {
    try {
        const { image, heading, p1, p2, p3, p4, lm } = req.body
        const newOurTeam = new OurTeamApi({
            image,
            heading,
            p1,
            p2,
            p3,
            p4,
            lm
        })
        const savedOurTeam = await newOurTeam.save()
        res.status(201).json({
            code: 201,
            message: 'Our Team created successfully',
            data: savedOurTeam
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/our-team', async (req, res) => {
    try {
        const ourTeam = await OurTeamApi.find()
        ourTeam?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Our Team fetched successfully',
            data: ourTeam
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// =========== Blog Post =============

app.post('/blog-post/sidebar', async (req, res) => {
    try {
        const { img, title, des, icon } = req.body
        const newSidebar = new Sidebar({
            img,
            title,
            des,
            icon
        })
        const savedSidebar = await newSidebar.save()
        res.status(201).json({
            code: 201,
            message: 'Blog Post Sidebar created successfully',
            data: savedSidebar
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/blog-post/sidebar', async (req, res) => {
    try {
        const sidebar = await Sidebar.find()
        sidebar?.map((data, index) => {
            data.img = `${process.env.BASE_URL}${data.img}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Blog Post Sidebar fetched successfully',
            data: sidebar
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/blog-post/firstmain', async (req, res) => {
    try {
        const { image, details, title, des, read } = req.body
        const newFirstMain = new FirstMain({
            image,
            details,
            title,
            des,
            read
        })
        const savedFirstMain = await newFirstMain.save()
        res.status(201).json({
            code: 201,
            message: 'Blog Post First Main created successfully',
            data: savedFirstMain
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/blog-post/firstmain', async (req, res) => {
    try {
        const firstMain = await FirstMain.find()
        firstMain?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Blog Post First Main fetched successfully',
            data: firstMain
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/blog-post/main', async (req, res) => {
    try {
        const { image, details, title, des, read } = req.body
        const newMain = new Main({
            image,
            details,
            title,
            des,
            read
        })
        const savedMain = await newMain.save()
        res.status(201).json({
            code: 201,
            message: 'Blog Post Main created successfully',
            data: savedMain
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/blog-post/main', async (req, res) => {
    try {
        const main = await Main.find()
        main?.map((data, index) => {
            data.image = `${process.env.BASE_URL}${data.image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Blog Post Main fetched successfully',
            data: main
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})


// ============= Admin Panal ==============


app.post('/admin/dashboard', async (req, res) => {
    try {
        const { blurPart, greenPart, orangePart } = req.body
        const newDashboard = new Dashboard1({
            blurPart,
            greenPart,
            orangePart
        })
        const savedDashboard = await newDashboard.save()
        res.status(201).json({
            code: 201,
            message: 'Dashboard created successfully',
            data: savedDashboard
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/admin/dashboard', async (req, res) => {
    try {
        const dashboard = await Dashboard1.find()
        dashboard?.map((data, index) => {
            data.blurPart.Image = `${process.env.BASE_URL}${data.blurPart.Image}`
            data.greenPart.Image = `${process.env.BASE_URL}${data.greenPart.Image}`
            data.orangePart.Image = `${process.env.BASE_URL}${data.orangePart.Image}`
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Dashboard fetched successfully',
            data: dashboard
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})

app.post('/admin/sidebar', async (req, res) => {
    try {
        const { icon, name, link } = req.body
        const newSidebar = new SidebarUL1({
            icon,
            name,
            link
        })
        const savedSidebar = await newSidebar.save()
        res.status(201).json({
            code: 201,
            message: 'Sidebar created successfully',
            data: savedSidebar
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? "Somthing went wrong, Please try again"
        })
    }
})
app.get('/getdata/admin/sidebar', async (req, res) => {
    try {
        const sidebar = await SidebarUL1.find()
        sidebar?.map((data, index) => {
            return data
        })
        res.status(200).json({
            code: 200,
            message: 'Sidebar fetched successfully',
            data: sidebar
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message ?? 'Somthing went wrong, Please try again',
        })
    }
})




app.listen(port, () => console.log("Server is running"));