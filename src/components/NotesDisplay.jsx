import React, { useState, useEffect } from 'react';
import styles from "./NotesDisplay.module.css";
import { jsPDF } from "jspdf";

export default function NotesDisplay() {
    const [data, setData] = useState([]);
    const [notes, setNotes] = useState("");
    const [bold, setBold] = useState(false);
    const [right, setRight] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [centre, setCentre] = useState(false);
    const [searchData, setsearchData] = useState("");

   
    useEffect(() => {
        const savedNotes = localStorage.getItem("notes");
        if (savedNotes) {
            setData(JSON.parse(savedNotes));
        }
    }, []);

    function handleDownload() {
        const doc = new jsPDF();

        doc.text(data.map((item, index) => item.content).join('\n'), 10, 10);
        doc.save("file.pdf");
    }
    function handleChange(e) {
        let id = e.target.id;
        if (id === "notes") {
            setNotes(e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const title = e.target.title.value;
        setData([...data, { title: title, content: notes }]);
        localStorage.setItem("notes", JSON.stringify([...data, { title: title, content: notes }]));
        setNotes("");
    }

    function handleDelete(index) {
        const updatedData = data.filter((n, i) => i !== index);
        setData(updatedData);
        localStorage.setItem("notes", JSON.stringify(updatedData));
    }

    function handleView(value) {
        setNotes(value.content);
    }

    function handleBold() {
        setBold(!bold);
    }

    function handleUnderline() {
        setUnderline(!underline);
    }

    function handleItalic() {
        setItalic(!italic);
    }

    function handleRight() {
        setRight(!right);
    }

    function handleCentre() {
        setCentre(!centre);
    }
    function handleSearch() {
        const search = searchData.toLowerCase(); 
        const filteredData = data.filter(item => {
           
            const titleMatch = item.title.toLowerCase().includes(search);
            return titleMatch;
        });
        setData(filteredData); 
    }
    


    return (
        <div>
            <h1>Welcome to Notes</h1>
            <div className={styles.container}>
                <div className={styles.visibleNotes}>
                    <div className={styles.fixed}>
                        <h2 className={styles.header}> Your Notes List</h2>
                        <div className={styles.btns}>
                            <input className={styles.search} type="text" placeholder='Search' id="search"   onChange={e => setsearchData(e.target.value)}
/>
                            <button onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                    <div className={styles.notes}>
                    <ul >
                        {data.map((value, index) => (
                           
                                <li key={index}>
                                    <div className={styles.note}>
                                        <div className={styles.internal}>
                                           
                                            {value.title};
                                        </div>
                                        <div className={styles.btn}>
                                            <button type='button' className='deletebtn' onClick={() => handleDelete(index)}><i class="fa-solid fa-trash"></i></button>
                                            <button type='button' onClick={() => handleView(value, index)}><i class="fa-solid fa-expand"></i></button>
                                        </div>
                                    </div>
                                </li>
                           
                        ))}
                         </ul>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.btns}>
                        <h2>Create a new Note</h2>
                        <button onClick={handleBold} className={styles.edit}>  <i class="fa-solid fa-bold"></i></button>
                        <button onClick={handleItalic} className={styles.edit}>  <i class="fa-solid fa-italic"></i></button>
                        <button onClick={handleRight} className={styles.edit}>  <i class="fa-solid fa-align-right"></i></button>
                        <button onClick={handleUnderline} className={styles.edit}> <i class="fa-solid fa-underline"></i></button>
                        <button onClick={handleCentre} className={styles.edit}>  <i class="fa-solid fa-align-justify"></i></button>
                        <button onClick={handleDownload} className={styles.edit}>  <i class="fa-solid fa-download"></i></button>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="title">Title : </label>
                        <input type="text" id="title" placeholder='Enter the title' required className={styles.title} />
                        <textarea type="text" id="notes" value={notes} onChange={handleChange} style={{ fontWeight: bold ? "bold" : "normal", fontStyle: italic ? "italic" : "normal", textAlign: right ? "right" : "left", textDecoration: underline ? "underline" : "none", textAlignLast: centre ? "center" : "left" }} />
                        <button type='submit' className={styles.saveBtn}>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
