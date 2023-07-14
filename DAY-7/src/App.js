
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Order from './pages/Order';
import Shop from './pages/Shop';
import Thanku from './pages/Thanku';




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
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Thanku' element={<Thanku/>}/>
        

      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
