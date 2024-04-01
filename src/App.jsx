import './reset.css';
import './app.scss';
import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Contact from './components/contact/Contact';

import developer from './developer.svg'

function App() {
  return (
    <div className='app'>
      <div id='navbar'>
        <Navbar /> 
      </div>
      <div id='content'>
        <Content /> 
      </div>
      <div id='contact'>
        <Contact /> 
      </div>
    </div>
  )
}

export default App
