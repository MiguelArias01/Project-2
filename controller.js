//@ts-check
import Event from './models/event.js'
import Guest from './models/guest.js'


export function deleteGuest(req, res) {
  Guest.findOneAndDelete({name: req.params.name})
    .then(event => {
      res.json(event)
    })
  return
}



export function editGuest(req, res) {
  Guest
    .findOneAndUpdate({name: req.params.name}, req.body)
    .then(event => {
      res.json(event)
    })
  return
}




export function guestIndex(req, res) {
  Guest
    .find({})
    .then(event => {
      res.json(event)
    })
}


export async function showGuests(req, res) {

  Guest
    .find({name: req.params.name})
    .then(event=> res.json(event))
  return
  
}



export async function createGuest(req, res)
{
  let guestBody = req.body
  
  Guest.create(guestBody)
    .then(event => {
      res.json(event)
    })
  return
} 


export async function addGuestsToEvent(req, res)
{
  let eventid = req.params.id
  let guestid = req.params.guestid

  console.log(eventid,guestid)

  const item = await Event.findByIdAndUpdate({ _id: eventid },
    { $push: { guessList: [guestid] } })
  res.json(item)

  return  
} 

export async function deleteGuestsToEvent(req, res)
{
  let { id, guestid} = req.params
 
  console.log(id,guestid)

  const item = await Event.findByIdAndRemove({ _id: id },
    { $pull: { guessList: [guestid] } })
  res.json(item)

  return  
} 


export function index(req, res) {
  Event
    .find({})
    .then(event => {
      res.json(event)
    })
}
export async function showName(req, res) {
  Event
    .find({hostName: req.params.name})
    .then(event=> res.json(event))
  return
  
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
