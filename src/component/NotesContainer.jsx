import React from 'react';

export default function NotesContainer({ notes, handleDeleteNote, handleDownloadNote, handleEditNote }) {
  return (
    <div className="notes-container">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <h3><b>{note.title}</b></h3>
          <p><i>{note.content}</i></p>
          <button
            className="delete-button"
            onClick={() => handleDeleteNote(note.id)}
          >
            Delete
          </button>
          <button
            className="download-button"
            onClick={() => handleDownloadNote(note)}
          >
            Download
          </button>
          <button
            className="edit-button"
            onClick={() => handleEditNote(note)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
