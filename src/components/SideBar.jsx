import React, { useState } from "react";

export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and sort notes based on search term and last modified date
  const sortedNotes = notes
    .filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.lastModified - a.lastModified);

  // Function to handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app-sidebar">
      {/* Sidebar Header */}
      <div className="app-sidebar-header">
        <h1>Notes</h1>
      </div>
      {/* Search Input */}
      <div className="app-sidebar-search">
        <input
          type="text"
          placeholder="Search by Note Heading"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {/* List of Notes */}
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            key={id}
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              {/* Note Title */}
              <strong>{title}</strong>
              {/* Delete Button */}
              <button onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {/* Sidebar Footer */}
      <div className="app-sidebar-footer">
        {/* Add Note Button */}
        <button onClick={onAddNote}>Add</button>
      </div>
    </div>
  );
}
