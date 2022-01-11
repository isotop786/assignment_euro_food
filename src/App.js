import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component 
import Nav from './Component/Layout/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Layout/Footer';

// products
import Fish from './Component/Products/Fish';
import Veg from './Component/Products/Veg';
import Finger from './Component/Products/Finger';
import Seafood from './Component/Products/Seafood';


const App = ()=>{

  return(
    <>
    <Nav/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fish' element={<Fish/>}></Route>
      <Route path='/veg' element={<Veg/>}></Route>
      <Route path='/finger' element={<Finger/>}></Route>
      <Route path='/seafood' element={<Seafood/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    
    <Footer/>
    </>
  )
}

export default App;