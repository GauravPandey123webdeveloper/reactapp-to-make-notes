import React from 'react'
import './NoteList.css'
const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className='box2'>
      {notes.map((note, index) => (
        <div className="note" key={index}>
          <h3>{note.title}</h3>
          <button onClick={() => deleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
