import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load notes from local storage on initial render
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to local storage whenever the 'notes' state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Function to add a new note
  const addNote = (title, content) => {
    const newNote = { title, content };
    setNotes([...notes, newNote]);
  };

  // Function to delete a note
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  // Function to handle search term change
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           note.content.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='box1'>
      <h1>React Notes App</h1>
      <NoteForm addNote={addNote} />
      <SearchBar handleSearch={handleSearch} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
