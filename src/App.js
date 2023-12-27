import './App.css';
import { Route, Routes } from 'react-router-dom';
import Question from './compnents/Question';
import HomePage from './compnents/HomePage';

function App() {

  return (

    <div>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Question' element={<Question/>}/>
      </Routes>

    </div>
  );
}

export default App;
