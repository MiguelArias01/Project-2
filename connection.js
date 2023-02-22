import mongoose from 'mongoose'
mongoose.set('strictQuery', false)
// mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://0.0.0.0:27017/teventdb', { useNewUrlParser: true }, {useUnifiedTopology: true})
  .catch((err) => {
    console.log(`Error connection go MongoBD: ${err.message}`)
  })
  
mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB!')
})
  
mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection  error: ${err}`)
})


export default mongoose
