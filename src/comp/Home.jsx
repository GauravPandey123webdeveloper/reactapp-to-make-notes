import React from 'react'
import './Home.css'
import Sidenav from './Sidenav'
// import Css from '../Notes/Css'
export default function Home() {
  return (
    <div>
       <div className='main'>
        <div className="sidenav">
          <Sidenav/>
        </div>
        <div className="notes">

        </div>
      </div>
    </div>

  )
}
