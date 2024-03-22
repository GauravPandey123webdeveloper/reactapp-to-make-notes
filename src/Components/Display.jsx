import React, { useState, useEffect } from "react";
import styles from "./Display.module.css";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Displaynotes() {
  const [data, setData] = useState([]);
  const [notes, setNotes] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setData(JSON.parse(savedNotes));
    }
  }, []);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "tushu") {
      setNotes(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = [
      ...data,
      { note: notes, bold: bold, italic: italic, underline: underline },
    ];
    setData(newData);
    localStorage.setItem("notes", JSON.stringify(newData));
    setNotes("");
    setBold(false);
    setItalic(false);
    setUnderline(false);
  }

  function handleClear() {
    setData([]);
    localStorage.removeItem("notes");
  }

  const handleBold = () => {
    setBold(!bold);
  };

  const handleItalic = () => {
    setItalic(!italic);
  };

  const handleUnderline = () => {
    setUnderline(!underline);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    localStorage.setItem("notes", JSON.stringify(newData));
  };

  return (
    <div className="body">
      <div className={styles.border}>
        <div className={styles.list}>
          <h1>Your Notes List:</h1>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <div
                  style={{
                    fontWeight: item.bold ? "bold" : "normal",
                    fontStyle: item.italic ? "italic" : "normal",
                    textDecoration: item.underline ? "underline" : "none",
                    fontSize: "30px",
                  }}
                >
                  {item.note}
                  <button
                    onClick={() => handleDelete(index)}
                    style={{ marginLeft: "15px", borderRadius: "10px" }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button onClick={handleClear} className="Btn">
            Clear Notes
          </button>
        </div>

        <div className={styles.notes}>
          <h1>Write Your Notes here:</h1>

          <div className={styles.head}>
            <button onClick={handleBold}>
              <FormatBoldIcon
                style={{
                  marginLeft: "5px",
                  fontSize: "28px",
                  color: bold ? "black" : "",
                }}
              />
            </button>
            <button onClick={handleItalic}>
              <FormatItalicIcon
                style={{
                  marginLeft: "5px",
                  fontSize: "28px",
                  color: italic ? "black" : "",
                }}
              />
            </button>
            <button onClick={handleUnderline}>
              <FormatUnderlinedIcon
                style={{
                  marginLeft: "5px",
                  fontSize: "28px",
                  color: underline ? "black" : "",
                }}
              />
            </button>
          </div>
          <textarea
            name="tushu"
            cols="85"
            rows="30"
            className={styles.notes1}
            value={notes}
            onChange={handleChange}
            style={{
              fontWeight: bold ? "bold" : "normal",
              fontStyle: italic ? "italic" : "normal",
              textDecoration: underline ? "underline" : "none",
            }}
          ></textarea>
          <div className="btn">
            <button type="submit" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
