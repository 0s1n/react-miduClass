import { useEffect, useState } from 'react'
import { Note } from './Note'
import { getAll as getAllNotes, create as createNote } from './services/notes'

export default function App () {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    getAllNotes()
      .then(notes => {
        setNotes(notes)
        setLoading(false)
      })
  }, [])

  // const [showAll, setSetshowAll] = useState(true)

  const handleChange = (e) => {
    setNewNote(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('crear nota')
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    createNote(noteToAddToState)
      .then(newNote => {
        setNotes(prev => prev.concat(newNote))
      })
      .catch(e => {
        console.error(e)
        setError('La API ha petado')
      })

    // const noteToAddToState = {
    //     title: newNote,
    //     body: newNote,
    //     userId: 1,
    //     id: notes.length + 1,
    //     content: newNote,
    //     date: new Date().toISOString(),
    //     important: Math.random() < 0.5
    // };

    // setNotes([
    //     ...notes,
    //     noteToAddToState
    // ])
    setNewNote('')
  }

  // const handleShowAll = () => {
  //     setSetshowAll(() => !showAll)
  // }

  return (
    <div>
      <h1>Notes</h1>
      {/* <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show all"}</button> */}
      {loading ? 'Cargando...' : ''}
      <ol>
        {
          notes
            // .filter(note => note.important === true ? note : showAll)
            .map(note => <Note key={note.id} {...note} />)
        }
      </ol>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>

      {error || ''}
    </div>
  )
}
// export default App
