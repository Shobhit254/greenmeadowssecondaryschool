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

import { Helmet } from 'react-helmet-async';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Helmet>
        <title>Green Meadows Secondary School | Best School in Delhi</title>
        <meta
          name="description"
          content="Green Meadows Secondary School is a leading school in Karawal Nagar, Delhi offering quality education, modern facilities, and experienced teachers."
        />
        <meta
          name="keywords"
          content="Green Meadows Secondary School, Best School in Delhi, Quality Education, Modern Facilities"
        />
        <meta name="author" content="Green Meadows Secondary School" />
      </Helmet>

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
