import React, { useCallback, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./react-quill-custom.css";
import "../App.css";
import jsPDF from "jspdf";

export default function Main({ activeNote, onUpdateNote }) {
  // State to manage the note data
  const [noteData, setNoteData] = useState({
    title: activeNote ? activeNote.title : "",
    body: activeNote ? activeNote.body : "",
  });

  // Update noteData when activeNote changes
  useEffect(() => {
    setNoteData({
      title: activeNote ? activeNote.title : "",
      body: activeNote ? activeNote.body : "",
    });
  }, [activeNote]);

  // Function to handle changes in the editor content
  const handleChange = useCallback((content) => {
    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      body: content,
    }));
  }, []);

  // Function to save the note
  const handleSave = () => {
    onUpdateNote({
      ...activeNote,
      title: noteData.title,
      body: noteData.body,
      lastModified: Date.now(),
    });
  };

  // Function to update the note
  const handleUpdate = () => {
    onUpdateNote({
      ...activeNote,
      title: noteData.title,
      body: noteData.body,
      lastModified: Date.now(),
    });
    const editor = document.querySelector(".ql-editor");
    editor.focus();
  };

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    // Remove HTML tags from note body for PDF
    const textWithoutTags = noteData.body.replace(/<[^>]*>/g, '');
    // Add title and body to PDF
    doc.text(noteData.title, 10, 10);
    doc.text(textWithoutTags, 10, 20);
    // Save PDF with note title
    doc.save(`${noteData.title}.pdf`);
  };
  

  return (
    <div className="app-main">
      {/* Heading Input */}
      <input
        type="text"
        value={noteData.title}
        onChange={(e) =>
          setNoteData((prevNoteData) => ({
            ...prevNoteData,
            title: e.target.value,
          }))
        }
        placeholder="Enter Note Heading"
        className="note-heading-input"
      />

      <div className="app-main-note-edit">
        {/* Editor Component */}
        <ReactQuill
          theme="snow"
          value={noteData.body}
          onChange={handleChange}
          modules={{
            toolbar: {
              container: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "video"],
                ["clean"],
              ],
            },
          }}
        />
        {/* Button Container */}
        <div className="button-container">
          {/* Save Button */}
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
          {/* Update Button */}
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
          {/* Download PDF Button */}
          <button className="download-button" onClick={handleDownloadPDF}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
