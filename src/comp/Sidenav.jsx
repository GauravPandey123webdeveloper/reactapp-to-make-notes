import React from 'react'
import './Sidenav.css'
import { Link } from 'react-router-dom'
export default function Sidenav() {
  // const navigate = useNavigate()
  // function handleclick(e){
  //   // e.preventDefault
  //   navigate('./Html')
  // }
  return (
    <div>
      <ul className='notes-list'>
       <Link to={'/Html'}><li>Html</li></Link>
      <Link to={'/Css'}><li>Css</li></Link>
        <Link to={'/Java'}><li>Java</li></Link>
       <Link to={'/Javascript'}> <li>Javascript</li></Link>
        <Link to={'/Python'}> <li>Python</li></Link>
      </ul>
    </div>
  )
}
