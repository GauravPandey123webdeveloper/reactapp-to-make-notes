import {Routes,Route} from 'react-router-dom'
import NotesDisplay from './components/NotesDisplay';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NotesDisplay/>}/>
      </Routes>
    </div>
  );
}

export default App;
