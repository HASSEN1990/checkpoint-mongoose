const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
app.use = (express.json())
mongoose.connect(process.env.MONGO_URI,
(err)=>(err ? console.log (err) : console.log('database connected')
))
const User = require('./models/userModel')


//ROUTES
app.use('/api/users', require('./routes/userRoutes'))

// User.create({name:'hassen',age:'31',favoriteFoods:'pizza',email:'hassen.oaase@gmail.com',

// })

app.listen(process.env.PORT,()=>console.log('server is running on port 5000'))