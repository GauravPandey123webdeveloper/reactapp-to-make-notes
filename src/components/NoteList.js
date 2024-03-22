import React from "react"; 
import AddNote from "./AddNote";
import Note from "./Note";

export default function NotesList({
  myNotes,
  handleNoteText,
  handleAddNote,
  handleDeleteNotes,
  noteText,
}) {
  const handleDownloadNote = () => {
  
    const blob = new Blob([noteText], { type: "text/plain" });

  
    const url = window.URL.createObjectURL(blob);

   
    const link = document.createElement("a");
    link.href = url;
    link.download = "note.txt";
    document.body.appendChild(link);
    link.click();

  
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="notes-list">
      <AddNote
        noteText={noteText}
        handleAddNote={handleAddNote}
        handleNoteText={handleNoteText}
        handleDownloadNote={handleDownloadNote}
      />
      {myNotes.map((note) => {
        return (
          <Note
            handleDeleteNotes={handleDeleteNotes}
            key={note.id}
            note={note}
          />
        );
      })}
    </div>
  );
}
