import React, { useState } from 'react'
import styles from "./Notes.module.css"
import { ColorPicker } from 'primereact/colorpicker';

export default function Notes({ note, setNote }) {
    const [color1, setColor1] = useState(false);
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [color, setColor] = useState("black");
   
    const [print, setPrint] = useState(false);
    
    function handleChange(e) {
        e.preventDefault();
            setNote({ ...note, [e.target.id]: e.target.value })
    }
    function handleBold(e) {
        e.preventDefault();
        setBold(!bold)
        if (!bold) {
            document.getElementById("text").style.fontWeight = "bold";
            document.getElementById("bold").style.backgroundColor = "lightgreen"
        }
        else {
            document.getElementById("text").style.fontWeight = "normal";
            document.getElementById("bold").style.backgroundColor = "white"
        }
    }
    function handleItalic(e) {
        e.preventDefault();
        setItalic(!italic)
        if (!italic) {
            document.getElementById("text").style.fontStyle = "italic";
            document.getElementById("italic").style.backgroundColor = "lightgreen"
        }
        else {
            document.getElementById("text").style.fontStyle = "normal";
            document.getElementById("italic").style.backgroundColor = "white"
        }
    }
    function handleUnderline(e) {
        e.preventDefault();
        setUnderline(!underline)
        if (!underline) {
            document.getElementById("text").style.textDecorationLine = "underline";
            document.getElementById("underline").style.backgroundColor = "lightgreen"
        }
        else {
            document.getElementById("text").style.textDecorationLine = "none";
            document.getElementById("underline").style.backgroundColor = "white"
        }
    }
    function handleColor(e) {
        e.preventDefault();
        setColor1(!color1)
        if (!color1) {
            document.getElementById("color").style.backgroundColor = "lightgreen";
        }
        else {
            document.getElementById("color").style.backgroundColor = "white"
        }
    }
    function handlePrint(e) {
        e.preventDefault();
        setPrint(!print)
        if (!print) {
            var printTextArea = document.getElementById("text");
            var WinPrint = window.open('left=0,top=0,width=800,height=900,');
            WinPrint.document.write(printTextArea.innerHTML);
            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.print();
            WinPrint.close();
        }
        setPrint(true);
    }
    function handleColorChange(e) {
        setColor(e.target.value)
        document.getElementById("text").style.color = `#${color}`;
    }
    
    return (
        <div className={styles.Notesbox}>
            <div className={styles.notesName}>
                
                <label htmlFor="title">{note.title === "" ? "Title" : note.title}</label>
            </div>
            <div className={styles.funBtn}>
                <button className={styles.btn} onClick={handleBold} id="bold">Bold</button>
                <button className={styles.btn} onClick={handleItalic} id="italic">Italic</button>
                <button className={styles.btn} onClick={handleUnderline} id="underline">UnderLine</button>
                <button className={styles.btn} onClick={handleColor} id="color">Color</button>
                
              
           
              
                <button className={styles.btn} onClick={handlePrint} id="print">Print</button>
            </div>
            {color1 && (
                <div className={styles.colorPopup}>
                    <ColorPicker value={color} onChange={handleColorChange} inline />
                </div>
            )}
            <textarea type="text" onChange={handleChange} id='text' value={note.text} className={styles.inputNotes} placeholder='write something' />
        </div>
    )
}