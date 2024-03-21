import React, { useState } from 'react';
import styles from './Displaynotes.module.css';

import { jsPDF } from "jspdf"; 

export default function Displaynotes() {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [centre, setCentre] = useState(false);
    const [data, setData] = useState([]);
    const [notes, setNotes] = useState("");
    const [title, setTitle] = useState("");
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
  

    function handlechange(e) {
        let id = e.target.id;
        if (id === "notes") {
            setNotes(e.target.value);
        } else if (id === "title") {
            setTitle(e.target.value);
        }
    }

    function handleDownload(title) {
        const doc = new jsPDF();
    
        doc.text(data.map((value, index) => value.content).join('\n'), 10, 10);
        doc.save(`${title}.pdf`);
    }
    

    function handleSubmit(e) {
        e.preventDefault();
        const updatedData = [...data];
        if (selectedNoteIndex !== null) {
            updatedData[selectedNoteIndex] = { title: title, content: notes };
        } else {
            updatedData.push({ title: title, content: notes });
        }
        setData(updatedData);
        localStorage.setItem('notes', JSON.stringify(updatedData));
        setNotes("");
        setTitle("");
        setSelectedNoteIndex(null);
    }

    function handleDelete(index) {
        const updatedData = data.filter((n, i) => i !== index);
        setData(updatedData);
        localStorage.setItem('notes', JSON.stringify(updatedData));
    }

    function handleView(index) {
        const selectedNote = data[index];
        setTitle(selectedNote.title);
        setNotes(selectedNote.content);
        setSelectedNoteIndex(index);
    }
    function handleBold() {
        setBold(!bold);
    }

    function handleline() {
        setUnderline(!underline);
    }

    function handleItalic() {
        setItalic(!italic);
    }

    function handleCentre() {
        setCentre(!centre);
    }

    function handleSearchChange(e) {
        setSearchQuery(e.target.value);
    }

    function filteredNotes() {
        return data.filter(note =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div>
            <div className={styles.border}>
                <div className={styles.list}>
                    <h1>Your Notes List:</h1>
                    <div>
                        <div className={styles.search1}>
                        <input type="text" placeholder="Search notes..." value={searchQuery} onChange={handleSearchChange}  />
                       
                        <button onClick={() => {} }className={styles.search1} >Search</button>
                        </div>
                        {filteredNotes().map((value, index) => (
                            <ul key={index}>
                                <li>
                                    <div className={styles.noteTitle} onClick={() => handleView(index)}>{value.title}</div>
                                    <button type='button' className='deletebtn' onClick={() => handleDelete(index)}>Delete</button>
                                    <button type='button' onClick={() => handleView(index)}>View</button>
                                </li>
                            </ul>
                        ))}
                    </div>
                    
                </div>

                <div className={styles.notes}>

                    <h1>{selectedNoteIndex !== null ? "Edit Your Note" : "Write Your Notes here:"}</h1>
                   
                    <div className={styles.font}> 
                    <button onClick={handleline} className={styles.edit}> <i className="fa-solid fa-underline"></i></button> 
                    <button onClick={handleBold} className={styles.edit}>  <i className="fa-solid fa-bold"></i></button>
                        <button onClick={handleItalic} className={styles.edit}>  <i className="fa-solid fa-italic"></i></button>
                       
                                           <button onClick={handleCentre} className={styles.edit}>  <i className="fa-solid fa-align-justify"></i></button>
                                           <button onClick={() => handleDownload(title)} className={styles.edit}>  <i class="fa-solid fa-download"></i></button>

                        </div>
                        <div className={styles.title}>
                        <h1><label>Title:</label></h1>
                    <input type="text" id="title" placeholder="Enter title" className={styles.title1}value={title} onChange={handlechange} />
                    </div>
                    <div className={styles.content}>
                    <form onSubmit={handleSubmit}>
                     
                        <textarea  rows= {20} cols={70} className={styles.notes1} type="text" id="notes" value={notes} onChange={handlechange} style={{ fontWeight: bold ? "bold" : "normal", fontStyle: italic ? "italic" : "normal", textDecoration: underline ? "underline" : "none", textAlignLast: centre ? "center" : "left" }}
            ></textarea>
                        <button type='submit'>Save</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}