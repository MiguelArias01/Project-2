//@ts-check
import mongoose from 'mongoose'


const Schema = mongoose.Schema

const Guest = new Schema({
  name: String,
  food: [],
  drink: [],
  plusOne: Boolean,
  canDJ: Boolean

})

export default mongoose.model('guests', Guest)
