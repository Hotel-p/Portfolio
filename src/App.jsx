import './reset.css';
import './app.scss';
import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className='app'>
      <div id='navbar'>
        <Navbar /> 
      </div>
      <div id='content'>
        <Content /> 
      </div>
      <div id='contact'></div>
      <Contact /> 
    </div>
  )
}

export default App
