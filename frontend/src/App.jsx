import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Facilities from './components/frontend/Facilities';
import Mandatory from './components/frontend/Mandatory';
import Gallery from './components/frontend/Gallery';
import Contact from './components/frontend/Contact';
import Message from './components/frontend/Message';
import './assets/css/style.scss';
import Computer from './components/frontend/ComputerLab';
import Science from './components/frontend/ScienceLab';
import Dance from './components/frontend/DanceLab';
import AdmissionBanner from "./components/common/AdmissionBanner";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AdmissionBanner />  {/* 👈 Yaha lagana hai */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/message' element={<Message />} />
          <Route path='/about' element={<About />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/mandatory' element={<Mandatory />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/computer' element={<Computer />} />
          <Route path='/science' element={<Science />} />
          <Route path='/dance' element={<Dance />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
