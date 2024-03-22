import React, { useState } from 'react'
import NotesHeading from './NotesHeading'
import NotesSideNav from './NotesSideNav'
import NotesText from './NotesText'
import styles from './NotesApp.module.css'
export default function NotesApp() {

    const [arr , setArr] = useState([]);
    const [obj , setObj] = useState({title: "", text:""});

  return (
    <div>
      <NotesHeading obj={obj} setObj={setObj} arr={arr} setArr={setArr}/>
      <div className={styles.container2}>
      <NotesSideNav arr={arr} setArr={setArr} setObj={setObj}/>
      <NotesText obj={obj} setObj={setObj} arr={arr} setArr={setArr}/>
      </div>
    </div>
  )
}
