import React from 'react';
import './App.css';
import Nav from './Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Footer';
import Inquiry from './Inquiry';
import Home from './Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slide';
import './Slide.css';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Nav/>
  <Routes>
    <Route path = '/' element ={<Home/>}></Route>
    <Route path = '/equipments' element ={<Slide/>}></Route>
    <Route path = '/about' element ={<About/>}></Route>
    <Route path = '/contact' element ={<Contact/>}></Route>
    <Route path = '/feedback' element ={<Inquiry/>}></Route>
  </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
