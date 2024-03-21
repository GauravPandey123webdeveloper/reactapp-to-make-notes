import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import JoditEditor from "jodit-react";

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [currentTitle, setCurrentTitle] = useState('');
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
    const [editorContent, setEditorContent] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [showNewNoteButton, setShowNewNoteButton] = useState(true);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);

        const savedNote = localStorage.getItem('note');
        if (savedNote) {
            setEditorContent(savedNote);
        }
    }, []);

    const editor = useRef(null);

    const handleAddNote = () => {
        console.log('Editor Content:', editor.current.value); // Log editor content to check if it's being received
        console.log('Current Title:', currentTitle); // Log current title to verify

        if (currentTitle.trim() !== '' && editor.current.value.trim() !== '') {
            const newNote = { title: currentTitle, content: editor.current.value };
            console.log('New Note:', newNote); // Log the new note to check its content
            const updatedNotes = [...notes, newNote];
            console.log('Updated Notes:', updatedNotes); // Log the updated notes array
            setNotes(updatedNotes);
            setCurrentTitle('');
            setEditorContent('');
            setSelectedNoteIndex(null);
            // Update local storage with the new note
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        } else {
            console.log('Title or content is empty.'); // Log a message if title or content is empty
        }
    };
    const handleOpenNote = (index) => {
        const note = filteredNotes[index]; // Get the note from the filteredNotes array
        if (note) {
            setCurrentTitle(note.title);
            setEditorContent(note.content);
            setSelectedNoteIndex(notes.indexOf(note)); // Update selectedNoteIndex with the index in the original notes array
        } else {
            setCurrentTitle(''); // Clear currentTitle if the note is not found
            setEditorContent('');
            setSelectedNoteIndex(null);
        }
    };

    const handleSaveNote = () => {
        if (selectedNoteIndex !== null) {
            const updatedNotes = [...notes];
            const updatedContent = editor.current.value;
            updatedNotes[selectedNoteIndex] = { title: currentTitle, content: updatedContent };
            setNotes(updatedNotes);
            // Update local storage with the updated notes
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        }
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="wrapper">
            <i className={`fas ${isSidebarOpen ? 'fa-bars' : 'fa-times'} sidebar-toggler`} onClick={toggleSidebar}></i>
            <p className="smallscreen">Sorry, your screen is too small for this. Try a tablet or computer! <br /> If your device is big enough, make sure it is in landscape mode!</p>
            <div className={`notes ${isSidebarOpen ? '' : 'open'}`}>
                {!isSidebarOpen && <div className="notes-placeholder">
                    <ul className='sidemenu' id="sidemenu" style={{
                        position: 'fixed',
                        top: 30,
                        width: '280px',
                        height: '91%',
                        backdropFilter: 'blur(1000px)',
                        WebkitBackdropFilter: 'blur(1000px)',
                        backgroundColor: 'rgba(2, 2, 2, 0.323)',
                        transition: 'right 0.3s ease-in-out',
                        border: '1px solid rgba(0, 0, 0, 0.2)',
                        borderRadius: '8px'
                    }}>
                        <li>

                            <div className='head-name'>
                                <ul className='btn'>
                                    <h2>Notes</h2>
                                </ul>

                            </div>
                            <div className='head'>
                                <div className='input-field'>
                                    <input
                                        type="text"
                                        value={currentTitle}
                                        placeholder='Enter title here...'
                                        onChange={(e) => setCurrentTitle(e.target.value)}
                                    />{showNewNoteButton ? (
                                        <button onClick={() => {
                                            setCurrentTitle('');
                                            setEditorContent('');
                                            setSelectedNoteIndex(null);
                                            setShowNewNoteButton(false);
                                        }}>New Note</button>
                                    ) : (<button onClick={() => {
                                        handleAddNote();
                                        setShowNewNoteButton(true); // Hide "New Note" button
                                    }}>Save</button>)}
                                    {/* <button onClick={handleAddNote}>Save</button> */}
                                </div>
                                
                            </div>
                            <div className='head'>
                                <div className='input-field'>
                                    <div>
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            placeholder="Search Note..."
                                            onChange={handleSearchQueryChange}
                                        />
                                    </div>
                                </div>
                            

                            </div>
                        </li>
                        <li>
                            <div className='lists'>
                                <ul className='notesList'>
                                    {filteredNotes.map((note, index) => (
                                        <li key={index} onClick={() => handleOpenNote(index)}>
                                            {note.title}
                                            {selectedNoteIndex === index ? (
                                                <button onClick={handleSaveNote}>Update</button>
                                            ) : (
                                                <button onClick={() => handleDeleteNote(index)}>Delete</button>
                                            )}
                                        </li>

                                    ))}

                                </ul>
                            </div>
                        </li>
                    </ul> </div>}
                    
            </div>
            
            <div className="notes-editor">
                
                <div>
                    <JoditEditor
                        value={editorContent}
                        onChange={setEditorContent}
                        className="editor-box"
                        ref={editor}
                        config={{
                            buttons: [
                                'bold',
                                'italic',
                                "strikethrough",
                                'underline',
                                "|",
                                "superscript",
                                "subscript",
                                "align",
                                "|",
                                "font",
                                "paragraph",
                                'symbols',
                                "|",
                                "fontsize",
                                "brush",
                                '|',
                                'ul',
                                'ol',
                                'lineHeight',
                                "|",
                                "outdent",
                                "indent",
                                "|",
                                "hr",
                                "eraser",
                                "|",
                                'image',
                                'file',
                                'video',
                                'link',
                                'table',
                                "|",
                                'selectall',
                                'print',
                                'find',
                                'preview',
                                'save',
                                ''
                            ],
                            height: '82vh',
                            width: '74vw',
                            uploader: { insertImageAsBase64URI: true },
                            readonly: false,
                            toolbarAdaptive: true,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteApp;
