
import './App.css';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import {Routes,Route} from 'react-router-dom'
import Css from './Notes/Css';
import Html from './Notes/Html';
import Java from './Notes/Java';
import Javascript from './Notes/Javascript';
import Python from './Notes/Python';
function App() {
  return (
    <div>
     <Navbar/>
      <Home/>
      {/* <Navbar/>
      <Home/> */}
    <Routes>
      <Route path='/Html' element={<Html/>}/>
      <Route path='/Css' element={<Css/>}/>
      <Route path='/Java' element={<Java/>}/>
      <Route path='/Javascript' element={<Javascript/>}/>
      <Route path='/Python' element={<Python/>}/>
    </Routes>
    </div>
  );
}

export default App;
