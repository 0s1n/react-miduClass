const express = require('express')
const cors = require('cors')

const app = express()
const logger = require('./loggerMiddleware')

app.use(cors())
app.use(express.json())

app.use(logger)

let notes = [
  {
    id: 1,
    content: 'HTML is easy sometimes',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTML',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify(notes));
// });

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find((note) => note.id === id)

  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})

app.patch('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const { content, important } = req.body

  if (!content && important === undefined) {
    return res.status(400).json({
      error: 'Content is missing'
    })
  }

  const updatedNote = {
    id,
    content,
    date: new Date().toISOString(),
    important
  }

  notes = notes.map(note => note.id === id ? updatedNote : note)

  res.status(202).json(updatedNote)
})

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter((note) => note.id === id)

  res.status(204).end()
})

app.post('/api/notes', (req, res) => {
  const note = req.body

  if (!note || !note.content) {
    return res.status(400).json({
      error: 'note.content is missing'
    })
  }

  const ids = notes.map((note) => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false,
    date: new Date().toISOString()
  }

  notes = [...notes, newNote]

  res.status(201).json(newNote)
})

app.use((req, res) => {
  console.log(req.path)
  res.status(404).json({
    error: 'Not found'
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
