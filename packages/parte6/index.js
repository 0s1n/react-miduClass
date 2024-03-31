require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')
const app = express()
const Note = require('./models/Note')

const logger = require('./loggerMiddleware')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')

app.use(cors())
app.use(express.json())

app.use(logger)

// let notes = [
//   {
//     id: 1,
//     content: 'HTML is easy sometimes',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTML',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ]

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify(notes));
// });

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  // const id = Number(req.params.id)
  const { id } = request.params

  Note.findById(id)
    .then(note => {
      if (note) response.status(200).json(note)
      response.status(404).end()
    })
    .catch(error => next(error))
})

app.patch('/api/notes/:id', (request, response, next) => {
  const { id } = request.params
  const { content, important } = request.body

  const newNoteInfo = {
    content,
    important
  }

  Note.findByIdAndUpdate(id, newNoteInfo, { new: true })
    .then(result => {
      response.status(202).json(result)
    })
    .catch(error => next(error))
})

app.delete('/api/notes/:id', (request, response, next) => {
  const { id } = request.params

  Note.findByIdAndDelete(id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/notes', (request, response, next) => {
  const {
    content,
    important = false
  } = request.body

  if (!content) {
    return response.status(400).json({
      error: 'required field is missing'
    })
  }

  const newNote = new Note({
    content,
    important,
    date: new Date().toISOString()
  })

  newNote
    .save()
    .then(savedNote => {
      response.status(201).json(newNote)
    })
    .catch(error => next(error))
})

app.use(notFound)

app.use(handleErrors)

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app, server }
