
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Products from './components/Products';
import NavBar from './components/NavBar'
import Profile from './components/Profile';
function App() {
  return (

    <div className="App">
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/:name" element={<Profile/>}/>
        <Route path="/products" element={<Products/>}/>

      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
