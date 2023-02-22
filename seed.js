import Event from './models/event.js'
import Guest from './models/guest.js'
import eventJson from './eventSeedData.json' assert {type: "json"}
import guestJson from './guestSeedData.json' assert {type: "json"}

await Event.deleteMany({})
await Event.create(eventJson)
await Guest.deleteMany({})
await Guest.create(guestJson)

