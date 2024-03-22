import React from 'react'
import MainNav from './components/MainNav.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import ShowSavedNotes from './components/ShowSavedNotes.jsx'
import SideView from './components/SideView.jsx'
import MainEditor from './components/MainEditor.jsx'
export default function App() {
  return (
    <div>
      <MainNav />
      <div className="below_nav">
        <SideView />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/ShowSaved' element={<ShowSavedNotes/>} />
          <Route path='/editor' element={<MainEditor/>} />
        </Routes>

      </div>
    </div>
  );
}
