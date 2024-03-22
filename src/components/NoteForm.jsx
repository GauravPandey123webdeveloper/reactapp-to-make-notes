import React, { useState } from 'react';

const NoteForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title===""){
      alert('please add title')
    }
    else{
      onSave({ title, content });
    setTitle('');
    setContent('');
    }
    
  };

  return (
    <>
    <label>Title of Notes:</label>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Create Notes:</label>
      <textarea
      className='cont'
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className='btn2'>Save</button>
    </form>
    </>
  );
};

export default NoteForm;
