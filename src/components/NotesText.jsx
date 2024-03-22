import React from "react";
import styles from "./NotesText.module.css";


export default function NotesText({obj , setObj , arr , setArr}) {
    function handleSubmit (e) {
        e.preventDefault();
        setArr([...arr , obj]);
    }

    function handleChange (e) {
        e.preventDefault();
        setObj({...obj , [e.target.id]: e.target.value});
    }

  return (
    <>
      <div className={styles.NotesText_MainContainer}>
        <form  onSubmit={handleSubmit}>
          <textarea
            id="text"
            cols="95"
            rows="30"
            value={obj.text}
            className={styles.text}
            placeholder="Enter the text"
            onChange={handleChange}
          ></textarea>
        </form>
      </div>
    </>
  );
}
