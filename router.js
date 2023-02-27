//@ts-check
import express from 'express'
let eventRouter = express.Router()

import * as controllers  from './controller.js'


eventRouter.get('/guest', controllers.guestIndex)
eventRouter.get('/guest/:name', controllers.showGuests)
eventRouter.post('/guest', controllers.createGuest)
eventRouter.patch('/guest/:name', controllers.editGuest)
eventRouter.delete('/guest/:name', controllers.deleteGuest)

eventRouter.get('/event', controllers.index)
eventRouter.get('/event/:name', controllers.showName)
eventRouter.post('/event', controllers.create)
eventRouter.patch('/event/:id/:guestid', controllers.addGuestsToEvent)
eventRouter.delete('/event/:id/:guestid', controllers.deleteGuestsToEvent)
eventRouter.patch('/event/:name', controllers.edit)
eventRouter.delete('/event/:name', controllers.delete1)


export default eventRouter