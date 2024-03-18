import {Routes,Route} from 'react-router-dom'

import Sidebar from './components/Sidebar';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Sidebar/>}/>
        <Route path='/Cards' element={<Cards/>}/>
       
        
      </Routes>
      <Cards/>
    </div>
  );
}

export default App;
