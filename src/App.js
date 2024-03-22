import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';
import { jsPDF } from "jspdf";

function App() {
  const [notes, setNotes] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newNote, setNewNote] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const doc = new jsPDF();

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = () => {
    if (newTitle.trim() !== '' && newNote.trim() !== '') {
      if (editNoteId !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editNoteId] = { title: newTitle, content: newNote };
        setNotes(updatedNotes);
        setEditNoteId(null);
      } else {
        setNotes([...notes, { title: newTitle, content: newNote }]);
      }
      setNewTitle('');
      setNewNote('');
    }
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((_, index) => index !== id);
    setNotes(filteredNotes);
  };

  const editNote = (id) => {
    setNewTitle(notes[id].title);
    setNewNote(notes[id].content);
    setEditNoteId(id);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <h1>All Notes</h1>
        <ul>
          {filteredNotes.map((note, index) => (
            <li key={index}>
              <div className="note">
                <div className="note-content">
                  <button onClick={() => editNote(index)}>
                    {note.title}
                  </button>
                  <ReactMarkdown>{note.content}</ReactMarkdown>
                </div>
                <div className="note-actions">
                  <button onClick={() => editNote(index)}>Edit</button>
                  <button onClick={() => deleteNote(index)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="notes">
        <h1> Note App</h1>
        <input
          type="text"
          placeholder="Enter note title..."
          value={newTitle}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Enter your note here..."
          value={newNote}
          onChange={handleNoteChange}
        />
        <button onClick={addNote}>
          {editNoteId !== null ? 'Save' : 'Add Note'}
        </button>
      </div>
    </div>
  );
}

export default App;
