import React, { useState } from 'react';
import './Cards.css';

function Cards() {
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editNote, setEditNote] = useState('');
  const [print, setPrint] = useState(false);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSaveNote = () => {
    if (note.trim() !== '') {
      const currentTime = new Date().toLocaleString();
      setSavedNotes([...savedNotes, { text: note, time: currentTime }]);
      setNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = savedNotes.filter((_, i) => i !== index);
    setSavedNotes(updatedNotes);
  };

  const handleEditNote = (index) => {
    setEditIndex(index);
    setEditNote(savedNotes[index].text);
  };


  const handlePrint = (index) => {
    const noteToPrint = savedNotes[index].text;
    const fileName = `note_${index + 1}.txt`;
    const blob = new Blob([noteToPrint], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
   document.body.appendChild(link);
    link.click();
   URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };
  



  const handleUpdateNote = () => {
    if (editNote.trim() !== '') {
      const updatedNotes = savedNotes.map((note, index) =>
        index === editIndex ? { ...note, text: editNote } : note
      );
      setSavedNotes(updatedNotes);
      setEditIndex(null);
      setEditNote('');
    }
  };

  return (
    <div>
      <div className="card border-success mb-3 one" style={{ maxWidth: '50rem' }}>
        <div className="card-header bg-transparent border-success">
          <p>Time is {new Date().toLocaleString()}</p>
        </div>
        <div className="card-body text-success">
          <h5 className="card-title">Notebook</h5>
          <textarea
            className="form-control"
            value={note}
            onChange={handleNoteChange}
            placeholder="Enter your note here..."
          />
        </div>
        <div className="card-footer bg-transparent border-success">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary" type="button" onClick={handleSaveNote}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Saved Notes</h3>
        {savedNotes.map((savedNote, index) => (
          <div className="card border-info mb-3 two" style={{ maxWidth: '50rem', marginLeft: '300px' }} key={index}>
            <div className="card-header bg-transparent border-info">
              <p>Time: {savedNote.time}</p>
            </div>
            <div className="card-body text-info">
              {editIndex === index ? (
                <>
                  <textarea
                    className="form-control"
                    value={editNote}
                    onChange={(e) => setEditNote(e.target.value)}
                  />
                  <button className="btn btn-success" onClick={handleUpdateNote}>Update</button>
                 
                </>
              ) : (
                <>
                  <p className="card-text">{savedNote.text}</p>
                  <button className="btn btn-warning on" onClick={() => handleEditNote(index)}>Edit</button>
                  <button className="btn btn-danger on" onClick={() => handleDeleteNote(index)}>Delete</button>
                  <button class="btn" onClick={() => handlePrint(index)}   ><i class="fa fa-download"  ></i> Download</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
