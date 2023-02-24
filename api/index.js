import express from 'express'
import mongoose from 'mongoose'
import eventRouter from '../router.js'
import lifecycle from './middleware/lifecycle.js'

const app = express()

//const todoSchema = new mongoose.Schema({
//text: String
//})

//const Todo = mongoose.model('Todo', todoSchema);

app.use(lifecycle({
  async setup() {
    console.log('Before handler')
    // Put your database connection here. e.g.
   
    await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    console.log('After handler')
    // Put your database disconnection here. e.g.
    await mongoose.disconnect()
  }
}))



// Feel free to use a router and move this elsewhere.
app.use(express.json())
app.use('/api', eventRouter)


// Don't use app.listen. Instead export app.
export default app