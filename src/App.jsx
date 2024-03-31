import './reset.css';
import './app.scss';
import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Content />
      <div className='footer'></div>
    </div>
  )
}

export default App
