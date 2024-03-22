import React, { useState, useEffect } from "react";
import styles from "./Display.module.css";

export default function Displaynotes() {
  const [data, setData] = useState([]); // bhai yai suke liye hai jha tere notes save hongai.!
  const [notes, setNotes] = useState(""); // bhai yai jha tu kaam kega uske liye haiii

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setData(JSON.parse(savedNotes));
    }
  }, []);

  function handleChange(e) {
    let name = e.target.name;
    if (name === "tushu") {
      setNotes(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = [...data, notes];
    setData(newData);
    localStorage.setItem("notes", JSON.stringify(newData));
    setNotes("");
  }

  function handleClear() {
    setData([]);
    localStorage.removeItem("notes");
  }

  return (
    <div className="body">
      <div className={styles.border}>
        <div className={styles.list}>
          <h1>Your Notes List:</h1>
          <ul>
            {data.map((note ,  index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>

          <button onClick={handleClear} className="Btn">
            Clear Notes
          </button>
        </div>

        <div className={styles.notes}>
          <h1>Write Your Notes here:</h1>
          <textarea
            name="tushu"
            cols="85"
            rows="30"
            className={styles.notes1}
            value={notes}
            onChange={handleChange}
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
