import React from 'react';
import './styles/css/main.css';
import logo from './images/logo.jpg';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <img src={logo} className='logo' />
      </div>
    </div>
  );
}

export default App;
