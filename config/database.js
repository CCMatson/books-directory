import mongoose from 'mongoose'

//shortcut ot mongoose.connection object
const db = mongoose.connection

// Prep for Mongoose 7 and surpress deprecation warnings
mongoose.set('strictQuery', false)

// connect to the database
mongoose.connect(process.env.DATABASE_URL)

db.on('connected', function(){
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})