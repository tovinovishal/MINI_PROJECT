
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/Home' element={<Home/>}/>

      </Routes>
      </BrowserRouter>
    
      
     
    </div>
  );
}

export default App;
