//@ts-check
import mongoose from '../connection.js'



const Schema = mongoose.Schema

const Event = new Schema({
  hostName: String,
  Street: String,
  city: String,
  date: Number,
  time: Number,
  info: String,
  notInvited: [],
  guessList:[{type : mongoose.Schema.Types.ObjectId, ref: 'guests'}]
  
})

export default mongoose.model('events', Event)
