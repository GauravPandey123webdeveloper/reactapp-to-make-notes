import React, { useState } from 'react';
import './NoteForm.css'

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className=''>
    <form onSubmit={handleSubmit}>
     <label></label>
      <input 
      id='title'
        type="text"
        placeholder="Enter  title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className='cont'>
      <textarea
        placeholder="Enter note content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className='btn' type="submit">Save</button>
      </div>
      
    </form>
    </div>
  );
};

export default NoteForm;
