import React, { useState } from "react";
// import NotesTitle from "./NotesTitle";
import NotesNav from "./NotesNav";
import NotesContain from "./NotesContain";
import styles from "./Notes.module.css";

export default function Notes() {
  const [arr, setArr] = useState([]);
  const [obj, setObj] = useState({ title: "", text: "" });

  return (
    <div>
      <Notes obj={obj} setObj={setObj} arr={arr} setArr={setArr} />
      <div className={styles.container2}>
        <NotesNav arr={arr} setArr={setArr} setObj={setObj} />
        <NotesContain obj={obj} setObj={setObj} arr={arr} setArr={setArr} />
      </div>
    </div>
  );
}
