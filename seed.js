import 'dotenv/config'
import Event from './models/event.js'
import Guest from './models/guest.js'
import eventJson from './eventSeedData.json' assert {type: "json"}
import guestJson from './guestSeedData.json' assert {type: "json"}
import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL)

await Event.deleteMany({})
await Event.create(eventJson)
await Guest.deleteMany({})
await Guest.create(guestJson)

await mongoose.disconnect()

