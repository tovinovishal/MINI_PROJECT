
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Order from './pages/Order';
import Shop from './pages/Shop';
import Thanku from './pages/Thanku';
import Signup from './pages/Signup';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
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
