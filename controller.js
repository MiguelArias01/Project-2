//@ts-check

import Event from './models/event.js'

import Guest from './models/guest.js'



export async function addGuestsToEvent(req, res)
{
  let eventid = req.params.id
  let guestid = req.params.guestid

  console.log(eventid,guestid)

  await Event.findByIdAndUpdate({eventid}, { guessList: [guestid] })
    .then(event => { res.json(event)})
    
} 

export function index(req, res) {
  Event
    .find({})
    .then(event => {
      res.json(event)
    })
}
export async function showYearOrName(req, res) {
  if (parseInt(req.params.yearOrName)) {
    Event
      .find({date: req.params.yearOrName})
      .then(event => res.json(event))
    return
  }else{
    Event
      .find({hostName: req.params.yearOrName})
      .then(event=> res.json(event))
    return
  }
}
export function create(req, res) {
  let newEvent = req.body
  Event.create(newEvent)
    .then(event => {
      res.json(event)
    })
  return
}
export function edit(req, res) {
  Event
    .findOneAndUpdate({hostName: req.params.name}, req.body)
    .then(event => {
      res.json(event)
    })
  return
}
export function delete1(req, res) {
  Event.findOneAndDelete({hostName: req.params.name})
    .then(event => {
      res.json(event)
    })
  return
}
