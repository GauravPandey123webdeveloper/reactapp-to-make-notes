import React, { useState } from "react";
import styles from "./NotesHeading.module.css";
import {jsPDF} from "jspdf";


export default function NotesHeading({ arr, setArr, obj, setObj }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, obj]);
    setObj({ title: "", text: "" });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setObj({ ...obj, [e.target.id]: e.target.value });
  };

  const genratePDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    doc.text(`${obj.title}`, 4, 5.5);
    doc.text(`${obj.area}`, 10, 10);
    doc.save(`${obj.title}.pdf`);

}
  
  return (
    <>
      <div className={styles.navBar}>
        {/* <i class="fa-solid fa-bars"></i> */}
        <div className={styles.logo}>
          {/* <img
            width="80"
            height="80"
            src="https://img.icons8.com/plasticine/80/task.png"
            alt="task"
          /> */}
          <h3 className={styles.logoText}>NotesMakerApp</h3>
        </div>

        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            value={obj.title}
            className={styles.searchBar}
            placeholder="Enter a Title "
            onChange={handleChange}
          />
          <button className={styles.saveBtn}>save</button>
          <button onClick={genratePDF} className={styles.down}>Download</button>
        </form>
      </div>
    </>
  );
}
