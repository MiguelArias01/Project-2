//@ts-check
import express from 'express'
let eventRouter = express.Router()

import * as controllers  from './controller.js'




eventRouter.post('/guest/', controllers.createGuest)


eventRouter.get('/event/', controllers.index)
eventRouter.get('/event/:id', controllers.showYearOrName)
eventRouter.post('/event/', controllers.create)
eventRouter.patch('/event/:id/:guestid', controllers.addGuestsToEvent)
eventRouter.patch('/event/:name', controllers.edit)
eventRouter.delete('/event/:name', controllers.delete1)


export default eventRouter