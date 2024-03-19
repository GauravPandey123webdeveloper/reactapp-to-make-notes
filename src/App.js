import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import NotesContainer from './component/NotesContainer';
import './App.css';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSaveNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      if (editId !== null) {
        const updatedNotes = notes.map(note =>
          note.id === editId ? { ...note, title, content } : note
        );
        setNotes(updatedNotes);
        setEditId(null);
      } else {
        const newNote = { id: Date.now(), title, content };
        setNotes([...notes, newNote]);
      }
      setTitle('');
      setContent('');
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleDownloadNote = (note) => {
    const element = document.createElement('a');
    const file = new Blob([`Title: ${note.title}\nContent: ${note.content}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${note.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const handleEditNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <center>
        <div className="name">
          <b><i><u><h1>Notes App</h1></u></i></b>
        </div>
      </center>
      <div className="app">
        <Sidebar
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSaveNote={handleSaveNote}
          editId={editId}
        />
        <NotesContainer
          notes={filteredNotes}
          handleDeleteNote={handleDeleteNote}
          handleDownloadNote={handleDownloadNote}
          handleEditNote={handleEditNote}
        />
      </div>
    </>
  );
}
