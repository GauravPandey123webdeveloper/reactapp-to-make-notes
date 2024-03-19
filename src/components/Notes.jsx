import React from 'react'
import styles from './Notes.module.css'
import { useState } from 'react'
import { jsPDF } from 'jspdf';
export default function Notes() {
  const [obj, setObj] =useState({title:"",txtarea:""});
  const [arr, setArr] =useState([])

 function handleDel(index){
   setArr(arr.filter((element,ind)=> ind!==index))
   setObj({title:"",txtarea:""})
 }
 function handleDownload(e){
   e.preventDefault();
   const doc = new jsPDF();

doc.text(`${obj.txtarea}`, 10, 10);
doc.save(`${obj.title}`.pdf);

 }
 
   function handleSubmit(e){
     e.preventDefault();
     setArr([...arr,obj])
     setObj({title:"",txtarea:""})
   }


  
    function handleDisplayClick (index){
      setObj(arr[index])
    }
    function handleClear (e){
        e.preventDefault();
        setArr([])
    }
  
    function handleChange (e){
        e.preventDefault();
        setObj({...obj,[e.target.id]:e.target.value})
    }

  return (
    <div>
       <div className={styles.main}>

        <div className={styles.add}>

         <div className={styles.addnote}> 

      
            <div classname={styles.adjstbtn}>
            <button className={styles.addntbtn} onClick={handleSubmit}>Add Note</button>
            <button className={styles.addntbtn} onClick={handleClear}>Clear All</button>

            </div>
            
         </div>
         <div >
         <form onSubmit={handleSubmit} className={styles.inpt}>
            <input className={styles.title} id='title' value={obj.title} type="text" placeholder='Enter Title'  onChange={handleChange} />
           
         </form>
         </div>
         {arr.map((element,index)=><div className={styles.display}><button onClick={()=>handleDisplayClick(index)} className={styles.disbtn}>{element.title}</button> <button onClick={()=>handleDel(index)} className={styles.delete}>Delete</button></div>)}

        </div>
        <div className={styles.notetitle}>
            <div className={styles.maintitle}>{obj.title!==''?obj.title:"TITLE"}<button onClick={handleDownload} className={styles.dnldbtn}>Save</button></div>
          <div className={styles.txtarea}>
          <textarea  name="" id="txtarea"value={obj.txtarea} onChange={handleChange}></textarea>
          </div>
        </div>
       </div>
    </div>
  )
}
