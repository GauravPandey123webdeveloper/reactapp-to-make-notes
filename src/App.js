import React, { useState, useEffect } from "react";
import NotesList from './components/NoteList.js'
import { nanoid } from "nanoid";
import Search from "./components/Search.js";
import Header from "./components/Header.js";


function App() {
  const [noteText, setNoteText] = useState("")
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [myNotes, setMyNotes] = useState(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    return storedNotes || [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(myNotes));
  }, [myNotes]);

  function updateNote(text) {
    setNoteText(text);
  }

  function addNote() {
    if (noteText.trim().length === 0) {
      alert("Add Some Text First");
      return;
    }

    const date = new Date().toLocaleDateString();

    const myNewNote = {
      id: nanoid(),
      text: noteText,
      date: date,
    };

    const updatedNotes = [...myNotes,myNewNote];
    setMyNotes(updatedNotes);
    setNoteText("");
  }


  
  function deleteNote(id) {
    const updatedNotes = myNotes.filter((note) => note.id !== id);
    setMyNotes(updatedNotes);
  }

  function searchBar(text) {
    setSearchText(text.toLowerCase());
  }

  function handleDownloadNote() {
    const blob = new Blob([noteText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "note.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className={darkMode ? "container dark-mode" : "container"}>
      <Header handleDarkMode={setDarkMode} />
      <Search handleSearchBar={searchBar} />
      <NotesList
        noteText={noteText}
        handleNoteText={updateNote}
        handleAddNote={addNote}
        handleDeleteNotes={deleteNote}
        handleDownloadNote={handleDownloadNote}
        myNotes={myNotes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
      />
    </div>
  );
}

export default App;
