import React, { useState } from 'react'
import styles from "./Notes.module.css"

export default function Notes({ note, setNote }) {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [print, setPrint] = useState(false);

    function handleChange(e) {
        e.preventDefault();
        if (note.title !== "") {
            setNote({ ...note, [e.target.id]: e.target.value })
        }
        else {
            alert("Write the Title first")
        }
    }
    function handleBold(e) {
        e.preventDefault();
        setBold(!bold)
        if (bold) {
            document.getElementById("text").style.fontWeight = "bold";
            document.getElementById("bold").style.backgroundColor="lightgreen"
        }
        else {
            document.getElementById("text").style.fontWeight = "normal";
            document.getElementById("bold").style.backgroundColor="white"
        }
    }
    function handleItalic(e) {
        e.preventDefault();
        setItalic(!italic)
        if (italic) {
            document.getElementById("text").style.fontStyle = "italic";
            document.getElementById("italic").style.backgroundColor="lightgreen"
        }
        else {
            document.getElementById("text").style.fontStyle = "normal";
            document.getElementById("italic").style.backgroundColor="white"
        }
    }
    function handleUnderline(e) {
        e.preventDefault();
        setUnderline(!underline)
        if (underline) {
            document.getElementById("text").style.textDecorationLine = "underline";
            document.getElementById("underline").style.backgroundColor="lightgreen"
        }
        else {
            document.getElementById("text").style.textDecorationLine = "none";
            document.getElementById("underline").style.backgroundColor="white"
        }
    }
    function handlePrint(e) {
        e.preventDefault();
        setPrint(!print)
        if (print) {
            // window.print();
            var printTextArea = document.getElementById("text");
            var WinPrint = window.open('left=0,top=0,width=800,height=900,');
            WinPrint.document.write(printTextArea.innerHTML);
            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.print();
            WinPrint.close();
        }
    }

    return (
        <div className={styles.Notesbox}>
            <div className={styles.notesName}>
                <u>{note.title === "" ? "Title" : note.title}</u>
            </div>
            <div className={styles.funBtn}>
                <button className={styles.btn} onClick={handleBold} id="bold"><i class="fa-solid fa-bold"></i></button>
                <button className={styles.btn} onClick={handleItalic} id="italic"><i class="fa-solid fa-italic"></i></button>
                <button className={styles.btn} onClick={handleUnderline} id="underline"><i class="fa-solid fa-underline"></i></button>
                <button className={styles.btn} onClick={handlePrint} id="print"><i class="fa-solid fa-print"></i></button>
            </div>
            <textarea type="text" onChange={handleChange} id='text' value={note.text} className={styles.inputNotes} placeholder='Write Your Notes Here' />
        </div>
    )
}
