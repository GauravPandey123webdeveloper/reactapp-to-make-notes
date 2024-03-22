import React from "react";
import styles from "./NotesSideNav.module.css";
export default function NotesSideNav({ arr, setArr, setObj }) {
  function handleDel(i) {
    {
      setArr(arr.filter((ele, ind) => i !== ind));
    }
  }

  function handleOpen(i) {
    {
      setObj(arr[i]);
    }
  }

  return (
    <>
      <div className={styles.NotesSideNav_MainContainer}>
        <div>
          {arr.map((ele, i) => (
            <div className={styles.display} key={i}>
              <div className={styles.item}>
                <span
                  className={styles.text}
                  key={i}
                  onClick={() => handleOpen(i)}
                >
                  {ele.title}
                </span>
                <span className={styles.del}>
                  <button onClick={() => handleDel(i)}>
                  <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" alt="filled-trash"/>
                  </button>
                </span>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
}
