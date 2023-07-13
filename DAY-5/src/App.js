
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
