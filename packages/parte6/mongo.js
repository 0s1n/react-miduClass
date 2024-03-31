const mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI

// conexión a mongodb
mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.log(err)
  })

// const noteSchema = new Schema({
//   content: String,
//   date: Date,
//   important: Boolean
// })

// const Note = model('Note', noteSchema)

// Note.find({}).then(res => {
//   console.log(res)
//   mongoose.connection.close()
// })

// const note = new Note({
//   content: 'MongoDB es increible, midu',
//   date: new Date(),
//   important: true
// })

// note.save()
//   .then(res => {
//     console.log(res)
//     mongoose.connection.close()
//   })
//   .catch(err => {
//     console.error(err)
//   })
