import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Note({ note, handleDeleteNotes}) {
  const handleDownload = () => {
    const blob = new Blob([note.text], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "note.txt";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <div className="delete-icon" onClick={() => handleDeleteNotes(note.id)}>
          <FaTrashAlt />
        </div>
        <button
          onClick={handleDownload}
          className="download"
          style={{
            borderRadius: "5px",
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}
