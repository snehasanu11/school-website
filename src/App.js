
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Students from './components/Students';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Admission from './components/Admission';
import Missing from './components/Missing';
import Academics from './components/Academics';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Faculty from './components/Faculty';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/Nav" element={<Nav/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Academics" element={<Academics/>}/>
      <Route path="/Admission" element={<Admission/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Faculty" element={<Faculty/>}/>
      <Route path="/Students" element={<Students/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/*" element={<Missing/>}/>
    </Routes>
    </div>
  );
}

export default App;
