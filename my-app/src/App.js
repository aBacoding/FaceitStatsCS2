import './App.css';
import React from 'react'
import Header from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
