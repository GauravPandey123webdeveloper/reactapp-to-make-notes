import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Main from "./components/Main";
import Sidebar from "./components/SideBar";
import "./App.css";

export default function App() {
  // State to manage notes
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  // State to manage the active note
  const [activeNote, setActiveNote] = useState(false);

  // Update local storage when notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Function to add a new note
  const onAddNote = () => {
    const newNote = {
      id: uuid(), // Generate a unique ID for the new note
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(), // Set the current timestamp
    };

    // Add the new note to the beginning of the notes array
    setNotes([newNote, ...notes]);
    // Set the newly added note as the active note
    setActiveNote(newNote.id);
  };

  // Function to delete a note
  const onDeleteNote = (noteId) => {
    // Filter out the note with the specified ID
    setNotes(notes.filter(({ id }) => id !== noteId));
    // Set activeNote to null when the active note is deleted
    setActiveNote(null);
  };

  // Function to update a note
  const onUpdateNote = (updatedNote) => {
    // Map through the notes array and replace the updated note
    const updatedNotesArr = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );

    // Update the notes array with the updated note
    setNotes(updatedNotesArr);
  };

  // Function to get the active note based on activeNote ID
  const getActiveNote = () => notes.find(({ id }) => id === activeNote);

  return (
    <div className="App">
      {/* Sidebar Component */}
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      {/* Main Component */}
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}
