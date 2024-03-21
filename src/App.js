// App.js

import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    setNotes([...notes, { id: Date.now(), title, content }]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>React Notes App</h1>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </header>
      <NoteForm addNote={addNote} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
