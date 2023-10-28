export const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <li className='note'>
      {note.content}
      <small>
        <time>{note.date}</time>
      </small>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

// export default Note
