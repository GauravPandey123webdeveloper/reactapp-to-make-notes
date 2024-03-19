import React from 'react';

export default function Sidebar({ title, setTitle, content, setContent, searchQuery, setSearchQuery, handleSaveNote, editId }) {
  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="save-button" onClick={handleSaveNote}>
        {editId !== null ? 'Update' : 'Save'}
      </button>
      <input
        type="text"
        placeholder="Search notes"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
