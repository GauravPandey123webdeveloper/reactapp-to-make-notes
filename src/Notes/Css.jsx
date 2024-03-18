import React,{useState} from 'react'
import './Css.css'
export default function Css() {
  const [italic, setItalic] = useState(false);
  const [bold, setBold] = useState(false); 
  const [save , setsave] = useState("")
  const [list,setList]=useState([])
  function handlechange(e){
    e.preventDefault();
    setsave(e.target.value)
  }
  function handleSave(e){
    e.preventDefault();
    setList([...list,save]);
    setsave("");
  }
  function handleDelete(i){
    setList(list.filter((a,ind)=>i!==ind))
  }
  function DeleteAll(){
    setList([]);
  }
  const toggleItalic = () => {
    setItalic(!italic);
    if(italic){
      document.getElementById("1234").style.fontStyle="italic";
      document.getElementById("1234").style.fontWeight="900";
    }
    else{
      document.getElementById("1234").style.fontWeight="100";
    }

  };
  const toggleBold = () => {
    setBold(!bold);
    if(bold){
      document.getElementById("1234").style.fontWeight="900";
    }
    else{
      document.getElementById("1234").style.fontWeight="100";
    }
  };
  return (
    <div className='html-box'>
      <nav className='htmlnav'>
        <div className="logo2">

        </div>
        <div className="list">
        <i class="fa-solid fa-bold" onClick={toggleBold}></i>
        <i class="fa-solid fa-italic" onClick={toggleItalic}></i>
        <i class="fa-solid fa-delete-left"></i>
        </div>
      </nav>
      <div className="notecontainer">
        <div className='texarea'>
          <textarea  id="1234" cols="50" rows="20" value={save} onChange={handlechange}></textarea>
          </div>
          <div className='deltearea'>
          {list.map((a,i)=><div>{a}<button className='deletea' onClick={()=>handleDelete(i)}>Delete</button><div></div></div>)} 
          </div>
      </div>
      <div className="button">
        <button className="save" onClick={handleSave}>Save</button>
        <button className="delete" onClick={DeleteAll}>Clear</button >
      </div>

    </div>
  )
}